'use client'

import {useProductsStore} from 'store/productsStore'
import React from 'react'
import TablePagination from '../table/pagination'

function PaginationProducts() {
  const {items, limit, products, setSkip, setLimit, setIsLoading} =
    useProductsStore(state => state)

  const itemsLimit = items?.limit ?? 10
  const itemsTotal = items?.total ?? 0
  const itemsSkip = items?.skip ?? 0

  const limitValues = [5, 10, 50, 100]

  if (products?.length) {
    return (
      <TablePagination
        limit={limitValues.includes(itemsLimit) ? itemsLimit : limit}
        setLimit={setLimit}
        total={itemsTotal}
        skip={itemsSkip}
        setSkip={setSkip}
        initialPage={1}
        setIsLoading={setIsLoading}
      />
    )
  }
  return <></>
}

export default PaginationProducts
