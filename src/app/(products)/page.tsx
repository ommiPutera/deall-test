import {List} from '@/components/products/list'
import PaginationProduct from '@/components/products/pagination'
import SearchProduct from '@/components/products/searchProduct'
import TableComponent from '@/components/Table'

async function IndexPage() {
  return (
    <TableComponent>
      <SearchProduct />
      <List />
      <PaginationProduct />
    </TableComponent>
  )
}

export default IndexPage
