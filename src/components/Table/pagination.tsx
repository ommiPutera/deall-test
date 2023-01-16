import {Pagination, Select} from '@mantine/core'
import {usePagination} from '@mantine/hooks'
import React from 'react'

interface IPagination {
  total: number
  setSkip: (newSkip: number) => void
  limit: number
  setLimit: (newLimit: number) => void
  initialPage: number
  setIsLoading: (bool: boolean) => void
}

function TablePagination({
  limit,
  setLimit,
  setSkip,
  total,
  initialPage,
  setIsLoading,
}: IPagination) {
  const totalPage = Math.ceil(total / limit)
  const pagination = usePagination({total: totalPage, initialPage: initialPage})

  const from = React.useMemo(() => {
    if (!total) return '0'
    let res = (pagination.active - 1) * limit + 1
    return res
  }, [limit, pagination.active, total])

  const to = React.useMemo(() => {
    let res = pagination.active * limit
    if (res > total) res = total
    return res
  }, [limit, pagination.active, total])

  const handleChange = (newPage: number) => {
    pagination.setPage(newPage)

    // Handle sending req
    if (pagination.active !== newPage) {
      setSkip((newPage - 1) * limit)
      setIsLoading(true)
    }
  }

  const onHandleLimit = (v: string) => {
    pagination.setPage(initialPage)
    setSkip(0)
    setLimit(parseInt(v))
    setIsLoading(true)
  }

  return (
    <>
      <Pagination
        page={pagination.active}
        onChange={handleChange}
        total={totalPage}
      />
      <Select
        value={limit.toString()}
        onChange={onHandleLimit}
        data={[
          {value: '5', label: '5'},
          {value: '10', label: '10'},
          {value: '50', label: '50'},
          {value: '100', label: '100'},
        ]}
      />
      <div className="">
        Showing {from} to {to} of {total}
      </div>
    </>
  )
}

export default TablePagination
