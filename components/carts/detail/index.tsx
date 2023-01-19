'use client'

import TableComponent from '@/components/table'
import {toUSD} from 'lib/utils/currency'
import {useCartsStore} from 'store/cartsStore'
import {Button, createStyles, Text, Title} from '@mantine/core'
import Link from 'next/link'
import React from 'react'
import ListProducts from './products'
import {toClient} from '@/lib/utils/passingProps'

interface IDetail {
  cartFromServer: any
  userFromServer: any
}

function DetailCart(props: IDetail) {
  const {cartFromServer, userFromServer} = props
  const {classes} = useStyles()
  const {setIsLoadingDetail} = useCartsStore(state => state)

  const cart = toClient(cartFromServer)
  const user = toClient(userFromServer)

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
        <div className="bg-gray-100 p-6 border rounded-md">
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
        <div className="bg-gray-100 p-6 border rounded-md">
          <Title order={5} className="mb-2 text-gray-700">
            CART INFO
          </Title>
          <InfoItem title="Total Quantity" value={cart?.totalQuantity} />
          <InfoItem title="Total Products" value={cart?.totalProducts} />
          <InfoItem
            title="Total Amount"
            value={
              <div>
                <b>{toUSD(cart?.total)}</b>
              </div>
            }
          />
        </div>
      </div>
      <TableComponent title="Products List" subTitle="List of products in Cart">
        <ListProducts items={cart?.products} />

        {/* Pagination can not implemented: because products cart response did not have limit, total, skip property  */}
      </TableComponent>
    </div>
  )
}

function InfoItem({
  title,
  value,
}: {
  title: string
  value: string | number | JSX.Element
}) {
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
      borderRadius: '10px',
      gap: '20px',
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
