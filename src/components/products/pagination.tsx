'use client'

import useDebounce from '@/hooks/useDebounce'
import {useProductsStore} from '@/store/productsStore'
import React from 'react'
import TablePagination from '../Table/pagination'

async function getSearched(inputValue: string): Promise<any | null> {
  try {
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${inputValue}`,
    )
    if (!response?.ok) {
      return null
    }
    const json = await response.json()
    return json
  } catch (error) {
    return null
  }
}

function PaginationProduct() {
  const {items} = useProductsStore(state => state)
  const {total, limit, skip} = items

  if (items) {
    return <TablePagination limit={limit} skip={skip} total={total} />
  }
  return <></>
}

export default PaginationProduct
