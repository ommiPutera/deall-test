'use client'

import {useProductsStore} from '@/store/productsStore'
import React from 'react'
import TablePagination from '../Table/pagination'

function PaginationProduct() {
  const {items, limit, products, setSkip, setLimit, setIsLoading} =
    useProductsStore(state => state)

  const itemsLimit = items.limit
  const itemsLTotal = items.total

  const limitValues = [5, 10, 15, 50, 100]

  if (products.length) {
    return (
      <TablePagination
        limit={limitValues.includes(itemsLimit) ? itemsLimit : limit}
        setLimit={setLimit}
        total={itemsLTotal}
        setSkip={setSkip}
        initialPage={1}
        setIsLoading={setIsLoading}
      />
    )
  }
  return <></>
}

export default PaginationProduct
