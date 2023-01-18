'use client'

import {toUSD} from '@/lib/utils/currency'
import {useCartsStore} from '@/store/cartsStore'
import {Button, Loader} from '@mantine/core'
import Link from 'next/link'
import React from 'react'
import TableList from '../Table/list'

async function getAllCarts(limit: number, skip: number): Promise<any | null> {
  let url = 'https://dummyjson.com/carts'
  if (limit) {
    url += '?limit=' + limit
  }
  if (skip || skip === 0) {
    url += '&skip=' + skip
  }

  try {
    const response = await fetch(url)
    if (!response?.ok) {
      return null
    }
    const json = await response.json()
    return json
  } catch (error) {
    return null
  }
}

function List() {
  const [cartId, setCartId] = React.useState(null)
  const {
    isLoading,
    setIsLoading,
    isLoadingDetail,
    setIsLoadingDetail,
    carts,
    setCarts,
    setItems,
    isSearchEmpty,
    limit,
    skip,
  } = useCartsStore(state => state)

  const columns = [
    {title: 'Uers ID', key: 'userId'},
    {
      title: 'Total',
      key: 'total',
      render: (row: any) => (
        <div>
          <b>{toUSD(row.total)}</b>
        </div>
      ),
    },
    {title: 'Total Products', key: 'totalProducts'},
    {title: 'Total Quantity', key: 'totalQuantity'},
    {
      title: 'Action',
      key: 'id',
      render: (row: any) => (
        <Link
          href={'/carts/' + row.id}
          onClick={() => {
            setIsLoadingDetail(true)
            setCartId(row.id)
          }}
        >
          <Button color="gray" variant="default" compact size="sm">
            Detail
            {isLoadingDetail && row.id === cartId ? (
              <Loader size="xs" className="ml-2" color="gray" />
            ) : null}
          </Button>
        </Link>
      ),
    },
  ]

  const getCarts = React.useCallback(async () => {
    await getAllCarts(limit, skip).then(res => {
      setCarts(res.carts)
      setItems(res)
      setIsLoading(false)
    })
  }, [limit, skip, setIsLoading, setItems, setCarts])

  React.useEffect(() => {
    if (isSearchEmpty) {
      getCarts()
    }
  }, [getCarts, isSearchEmpty, setIsLoading])

  return <TableList items={carts} columns={columns} isLoading={isLoading} />
}

export {List, getAllCarts}
