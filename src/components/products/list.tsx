'use client'

import {toUSD} from '@/lib/utils/currency'
import {useProductsStore} from '@/store/productsStore'
import React from 'react'
import TableList from '../Table/list'

async function getAllProducts(
  limit: number,
  skip: number,
): Promise<any | null> {
  let url = 'https://dummyjson.com/products'
  if (limit) {
    url += '?limit=' + limit
  }
  if (skip || skip === 0) {
    url += '&skip=' + skip
  }

  try {
    const response = await fetch(url)
    if (!response?.ok) {
      return null
    }
    const json = await response.json()
    return json
  } catch (error) {
    return null
  }
}

const defaultColumns = [
  {
    title: 'Product Name',
    key: 'title',
    key2: 'rating',
    className: 'font-bold',
    render: (row: any) => (
      <div>
        <p className="font-bold">{toUSD(row.title)}</p>
        <p className="text-green-700 text-xs">Rating Product: {row.rating}⭐</p>
      </div>
    ),
  },
  {title: 'Brand', key: 'brand', className: 'capitalize'},
  {
    title: 'Price',
    key: 'price',
    key2: 'discountPercentage',
    render: (row: any) => (
      <div>
        <p className="font-bold">{toUSD(row.price)}</p>
        <p className="text-orange-400 text-xs">
          Discount: {row.discountPercentage}%
        </p>
      </div>
    ),
    formatUSD: true,
  },
  {title: 'Stock', key: 'stock'},
  {title: 'Category', key: 'category', className: 'capitalize'},
]

function ListProducts({items, columns}: {items: []; columns?: []}) {
  const {
    isReload,
    isLoading,
    setIsLoading,
    setIsReload,
    products,
    setProducts,
    setItems,
    isSearchEmpty,
    limit,
    skip,
  } = useProductsStore(state => state)

  const getProducts = React.useCallback(async () => {
    await getAllProducts(limit, skip).then(res => {
      setProducts(res.products)
      setItems(res)
      setIsLoading(false)
      setIsReload(false)
    })
  }, [limit, skip, setProducts, setItems, setIsLoading, setIsReload])

  React.useEffect(() => {
    if (isSearchEmpty || isReload) {
      getProducts()
    }
  }, [getProducts, isReload, isSearchEmpty])

  return (
    <TableList
      items={items ?? products}
      columns={columns ?? defaultColumns}
      isLoading={isLoading}
    />
  )
}

export {ListProducts, getAllProducts}
