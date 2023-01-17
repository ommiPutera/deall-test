'use client'

import {toUSD} from '@/lib/utils/currency'
import {useCartsStore} from '@/store/cartsStore'
import {createStyles, Text, Title} from '@mantine/core'
import React from 'react'
import {ListProducts} from '../products/list'

interface IDetail {
  cart: any
  user: any
}

function DetailCart({cart, user}: IDetail) {
  const {classes} = useStyles()
  return (
    <div className={classes.wrapperDetail}>
      <Title order={2}>Cart #{cart.id}</Title>
      <br />
      <div className="info-section grid grid-cols-2 gap-6">
        <div>
          <Title order={3}>User Info</Title>
          <InfoItem title="Name" value={user.firstName + ' ' + user.lastName} />
          <InfoItem title="Email" value={user.email} />
          <InfoItem title="Phone Number" value={user.phone} />
        </div>
        <div>
          <Title order={3}>Cart Info</Title>
          <InfoItem title="# of Items" value={cart.totalQuantity} />
          <InfoItem title="Total Amount" value={toUSD(cart.total)} />
          <InfoItem title="Total Products" value={cart.totalProducts} />
        </div>
      </div>
      <ListProducts items={cart.products} />
    </div>
  )
}

function InfoItem({title, value}: {title: string; value: string | number}) {
  const {classes} = useStyles()
  return (
    <div className={classes.infoItem}>
      <Text className="xl:text-base">{title}:</Text>
      <Text className="xl:text-base">{value}</Text>
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
      background: theme.colors.gray[1],
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
