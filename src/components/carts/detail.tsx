'use client'

import {useCartsStore} from '@/store/cartsStore'
import React from 'react'

async function getCart(id: string): Promise<any | null> {
  let url = 'https://dummyjson.com/carts/'
  if (id) {
    url += id
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

async function getUser(userId: string): Promise<any | null> {
  let url = 'https://dummyjson.com/users/'
  if (userId) {
    url += userId
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

interface IDetail {
  id: string
  userId: string
}

function DetailCart({id, userId}: IDetail) {
  const {isLoading, setIsLoading} = useCartsStore(state => state)
  const [items, setItems] = React.useState([])
  const [userData, setUserData] = React.useState([])
  const [cartProducts, setCartProducts] = React.useState([])

  const getCarts = React.useCallback(async () => {
    await getCart(id).then(res => {
      setCartProducts(res.products)
      setItems(res)
      setIsLoading(false)
    })
  }, [id, setIsLoading])

  const loadUser = React.useCallback(async () => {
    await getUser(userId).then(res => {
      setUserData(res)
      setIsLoading(false)
    })
  }, [setIsLoading, userId])

  React.useEffect(() => {
    loadUser()
  }, [loadUser])

  return (
    <div>
      <h2>Detailll {id}</h2>
    </div>
  )
}

export default DetailCart
