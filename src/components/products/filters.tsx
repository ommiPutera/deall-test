'use client'

import {useProductsStore} from '@/store/productsStore'
import React from 'react'
import TableFilters from '../Table/filters'

async function getProductsOf(
  by: string,
  value: string | number,
  limit: number,
  skip: number,
): Promise<any | null> {
  let url = 'https://dummyjson.com/products/'
  if (value) {
    url += by + '/' + value
  }
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

function FiltersProducts() {
  const {
    setItems,
    setProducts,
    isReload,
    setIsReload,
    setIsLoading,
    limit,
    skip,
  } = useProductsStore(state => state)

  const handleSubmit = React.useCallback(
    async (by: string, value: string | number) => {
      if (value) {
        const productsFilters = await getProductsOf(by, value, limit, skip)
        setItems(productsFilters)
        setProducts(productsFilters.products)
        setIsLoading(false)
      }
    },
    [limit, setIsLoading, setItems, setProducts, skip],
  )

  const onFilter = (by: string, value: string | number) => {
    if (!value) setIsReload(true)
    setIsLoading(true)
    return handleSubmit(by, value)
  }

  const items = [
    {
      placeholder: 'Filter products by brand',
      label: 'Filter Brands',
      key: 'brands',
      options: ['apple', 'samsung'],
      onHandleChange: (value: string) => onFilter('brand', value),
    },
    {
      placeholder: 'Filter products by category',
      label: 'Filter Categories',
      key: 'categories',
      options: [
        'smartphones',
        'laptops',
        'fragrances',
        'skincare',
        'groceries',
        'home-decoration',
        'furniture',
        'tops',
        'womens-dresses',
        'womens-shoes',
        'mens-shirts',
        'mens-shoes',
        'mens-watches',
        'womens-watches',
        'womens-bags',
        'womens-jewellery',
        'sunglasses',
        'automotive',
        'motorcycle',
        'lighting',
      ],
      onHandleChange: (value: string) => onFilter('category', value),
    },
  ]

  return <TableFilters items={items} />
}

export default FiltersProducts
