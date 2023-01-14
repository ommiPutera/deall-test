import List from '@/components/products/list'
import SearchProduct from '@/components/products/search-product'
import TableComponent from '@/components/Table'

type ProductType = {
  id: number
  title: string
  brand: string
  price: number
  stock: number
  category: number
}

type ProductsType = {
  products: ProductType | []
  total: number
  skip: number
  limit: number
}

async function IndexPage() {
  return (
    <TableComponent>
      <SearchProduct />
      <List />
    </TableComponent>
  )
}

export default IndexPage
