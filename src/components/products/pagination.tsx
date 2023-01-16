'use client'

import {useProductsStore} from '@/store/productsStore'
import React from 'react'
import TablePagination from '../Table/pagination'

function PaginationProducts() {
  const {items, limit, products, setSkip, setLimit, setIsLoading} =
    useProductsStore(state => state)

  const itemsLimit = items?.limit ?? 10
  const itemsLTotal = items?.total ?? 0
  const itemsLSkip = items?.skip ?? 0

  const limitValues = [5, 10, 50, 100]

  if (products.length) {
    return (
      <TablePagination
        limit={limitValues.includes(itemsLimit) ? itemsLimit : limit}
        setLimit={setLimit}
        total={itemsLTotal}
        skip={itemsLSkip}
        setSkip={setSkip}
        initialPage={1}
        setIsLoading={setIsLoading}
      />
    )
  }
  return <></>
}

export default PaginationProducts
