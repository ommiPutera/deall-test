import {Pagination} from '@mantine/core'
import React from 'react'

interface IPagination {
  total: number
  skip: string
  limit: string
}

function TablePagination({limit, skip, total}: IPagination) {
  const [activePage, setPage] = React.useState(1)

  return <Pagination page={activePage} onChange={setPage} total={total} />
}

export default TablePagination
