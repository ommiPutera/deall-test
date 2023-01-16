'use client'

import {useProductsStore} from '@/store/productsStore'
import React from 'react'
import TablePagination from '../Table/pagination'

function PaginationProduct() {
  const {items, products, setSkip, setLimit, setIsLoading} = useProductsStore(
    state => state,
  )
  const {total, limit} = items

  if (products.length) {
    return (
      <TablePagination
        limit={limit}
        setLimit={setLimit}
        total={total}
        setSkip={setSkip}
        initialPage={1}
        setIsLoading={setIsLoading}
      />
    )
  }
  return <></>
}

export default PaginationProduct
