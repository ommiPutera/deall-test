'use client'

import TableComponent from '@/components/Table'
import {toUSD} from '@/lib/utils/currency'
import {useCartsStore} from '@/store/cartsStore'
import {Button, createStyles, Text, Title} from '@mantine/core'
import Link from 'next/link'
import React from 'react'
import ListProducts from './products'

interface IDetail {
  cart: any
  user: any
}

function DetailCart({cart, user}: IDetail) {
  const {classes} = useStyles()
  const {setIsLoadingDetail} = useCartsStore(state => state)

  React.useEffect(() => {
    setIsLoadingDetail(false)
  }, [setIsLoadingDetail])

  return (
    <div className={classes.wrapperDetail}>
      <div className="flex gap-4 items-center">
        <Link href="/carts">
          <Button variant="default">Back</Button>
        </Link>
        <Title order={3}>Cart #{cart?.id}</Title>
      </div>
      <br />
      <div className="info-section grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div>
          <Title order={5} className="mb-2 text-gray-700">
            USER INFO
          </Title>
          <InfoItem
            title="Name"
            value={user?.firstName + ' ' + user?.lastName}
          />
          <InfoItem title="Email" value={user?.email} />
          <InfoItem title="Phone Number" value={user?.phone} />
        </div>
        <div>
          <Title order={5} className="mb-2 text-gray-700">
            CART INFO
          </Title>
          <InfoItem title="Total Quantity" value={cart?.totalQuantity} />
          <InfoItem title="Total Amount" value={toUSD(cart?.total)} />
          <InfoItem title="Total Products" value={cart?.totalProducts} />
        </div>
      </div>
      <TableComponent title="Products List" subTitle="List of products in Cart">
        <ListProducts items={cart?.products} />

        {/* Pagination can not implemented: because products cart response did not have limit, total, skip property  */}
      </TableComponent>
    </div>
  )
}

function InfoItem({title, value}: {title: string; value: string | number}) {
  const {classes} = useStyles()
  return (
    <div className={classes.infoItem}>
      <Text className="xl:text-base text-gray-700">{title}:</Text>
      <Text className="xl:text-base text-gray-700">{value}</Text>
    </div>
  )
}

const useStyles = createStyles(theme => ({
  wrapperDetail: {
    padding: '20px',
    width: '100%',

    '.info-section': {
      padding: '20px',
      borderRadius: '10px',
      background: theme.colors.gray[0],
    },
    '.mantine-Select-input': {
      padding: '20px 15px',
    },
  },

  infoItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
}))

export default DetailCart
