'use client'

import {useProductsStore} from '@/store/productsStore'
import React from 'react'
import TableList from '../Table/list'

async function getAllProducts(): Promise<any | null> {
  try {
    const response = await fetch('https://dummyjson.com/products')
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
  {title: 'Price', key: 'price', formatUSD: true},
  {title: 'Stock', key: 'stock'},
  {title: 'Category', key: 'category'},
]

function List() {
  const {products, setProducts, isSearchEmpty} = useProductsStore(
    state => state,
  )

  const getProducts = React.useCallback(async () => {
    const res = await getAllProducts()
    setProducts(res.products)
  }, [setProducts])

  React.useEffect(() => {
    if (isSearchEmpty) {
      getProducts()
    }
  }, [getProducts, isSearchEmpty])

  return <TableList items={products} columns={columns} />
}

export {List, getAllProducts}
