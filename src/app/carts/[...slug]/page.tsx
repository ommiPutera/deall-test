import DetailCart from '@/components/carts/detail'

interface PageProps {
  params: {
    slug: string[]
  }
}

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

async function CartDetail({params}: PageProps) {
  const cartId = params.slug[0]

  const cart = await getCart(cartId || '')
  const user = await getUser(cart?.userId || '')

  return (
    <div>
      <DetailCart cart={cart} user={user} />
    </div>
  )
}

export default CartDetail
