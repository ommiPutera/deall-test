'use client'

import {useCartsStore} from '@/store/cartsStore'
import React from 'react'
import TablePagination from '../Table/pagination'

function PaginationProduct() {
  const {items, limit, carts, setSkip, setLimit, setIsLoading} = useCartsStore(
    state => state,
  )

  const itemsLimit = items.limit
  const itemsLTotal = items.total

  const limitValues = [5, 10, 15, 50, 100]

  if (carts.length) {
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
