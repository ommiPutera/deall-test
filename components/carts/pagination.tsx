'use client'

import {useCartsStore} from 'store/cartsStore'
import React from 'react'
import TablePagination from '../table/pagination'

function PaginationCarts() {
  const {items, limit, carts, setSkip, setLimit, setIsLoading} = useCartsStore(
    state => state,
  )

  const itemsLimit = items?.limit ?? 10
  const itemsTotal = items?.total ?? 0
  const itemsSkip = items?.skip ?? 0

  const limitValues = [5, 10, 50, 100]

  if (carts?.length) {
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

export default PaginationCarts
