import FiltersProducts from '@/components/products/filters'
import {ListProducts} from '@/components/products/list'
import PaginationProducts from '@/components/products/pagination'
import SearchProducts from '@/components/products/searchProduct'
import TableComponent from '@/components/Table'

async function IndexPage() {
  return (
    <TableComponent>
      <FiltersProducts />
      <SearchProducts />
      <ListProducts />
      <PaginationProducts />
    </TableComponent>
  )
}

export default IndexPage
