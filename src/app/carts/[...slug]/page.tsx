import DetailCart from '@/components/carts/detail'

interface PageProps {
  params: {
    slug: string[]
  }
}

function CartDetail({params}: PageProps) {
  return (
    <div>
      <DetailCart id={params.slug[0]} userId={params.slug[1]} />
    </div>
  )
}

export default CartDetail
