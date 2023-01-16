'use client'

import {toUSD} from '@/lib/utils/currency'
import {useProductsStore} from '@/store/productsStore'
import React from 'react'
import TableList from '../Table/list'

async function getAllProducts(
  limit: string,
  skip: string,
): Promise<any | null> {
  let url = 'https://dummyjson.com/products'
  if (limit) {
    url += '?limit=' + limit
  }
  if (skip) {
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

const columns = [
  {
    title: 'Product Name',
    key: 'title',
    key2: 'description',
    className: 'font-bold',
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
  {title: 'Category', key: 'category'},
]

function List() {
  const {
    isLoading,
    setIsLoading,
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
    })
  }, [limit, setIsLoading, setItems, setProducts, skip])

  React.useEffect(() => {
    if (isSearchEmpty) {
      getProducts()
    }
  }, [getProducts, isSearchEmpty, setIsLoading])

  return <TableList items={products} columns={columns} isLoading={isLoading} />
}

export {List, getAllProducts}
