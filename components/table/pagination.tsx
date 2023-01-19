'use client'

import {createStyles, Pagination, Select} from '@mantine/core'
import {usePagination} from '@mantine/hooks'
import clsx from 'clsx'
import React from 'react'

interface IPagination {
  total: number
  setSkip: (newSkip: number) => void
  limit: number
  skip: number
  setLimit: (newLimit: number) => void
  initialPage: number
  setIsLoading: (bool: boolean) => void
}

function TablePagination({
  limit,
  setLimit,
  setSkip,
  skip,
  total,
  initialPage,
  setIsLoading,
}: IPagination) {
  const {classes} = useStyles()
  const totalPage = Math.ceil(total / limit)
  const currentPage = Math.floor(totalPage - (total - skip) / limit + 1)
  const pagination = usePagination({total: totalPage, initialPage: initialPage})

  const from = React.useMemo(() => {
    if (!total) return '0'
    if (currentPage > total) return '1'

    let res = (currentPage - 1) * limit + 1
    return res
  }, [total, currentPage, limit])

  const to = React.useMemo(() => {
    let res = currentPage * limit
    if (res > total) res = total
    return res
  }, [limit, currentPage, total])

  const handleChange = (newPage: number) => {
    pagination.setPage(newPage)

    // Handle sending req
    if (currentPage !== newPage) {
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
    <div
      className={clsx(classes.wrapperPagination, 'flex flex-col lg:flex-row')}
    >
      <Select
        label="Set Limit"
        size="xs"
        className="limit mb-6 lg:mb-0"
        radius="md"
        value={limit.toString()}
        onChange={onHandleLimit}
        data={[
          {value: '5', label: '5', disabled: total <= 5},
          {value: '10', label: '10', disabled: total <= 10},
          {value: '50', label: '50', disabled: total <= 50},
          {value: '100', label: '100', disabled: total < 100},
        ]}
      />
      <div className="flex flex-col lg:flex-row items-center">
        <div className="text-sm mr-6 mb-6 lg:mb-0">
          Showing {from} to {to} of {total}
        </div>
        <Pagination
          size="sm"
          page={currentPage}
          onChange={handleChange}
          total={totalPage}
        />
      </div>
    </div>
  )
}

const useStyles = createStyles(theme => ({
  wrapperPagination: {
    padding: '34px 22px',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0 auto',
    overflowX: 'hidden',

    '.limit': {
      width: '70px',

      '.mantine-Select-label': {
        marginBottom: '10px',
      },
      '.mantine-Select-item': {
        marginBottom: '5px',
        textAlign: 'center',
      },
    },
  },
}))

export default TablePagination
