import TableComponent from '../../components/Table'

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

async function getAllProducts(): Promise<any | null> {
  try {
    const response = await fetch('https://dummyjson.com/products')
    if (!response?.ok) {
      return null
    }
    const json = await response.json()
    return json
  } catch (error) {
    return null
  }
}

const columns = [
  {title: 'Product Name', key: 'title'},
  {title: 'Brand', key: 'brand'},
  {title: 'Price', key: 'price'},
  {title: 'Stock', key: 'stock'},
  {title: 'Category', key: 'category'},
]

async function IndexPage() {
  const produtsItems = await getAllProducts()

  return <TableComponent items={produtsItems.products} columns={columns} />
}

export default IndexPage
