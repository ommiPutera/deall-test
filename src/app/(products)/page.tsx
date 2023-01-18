import FiltersProducts from '@/components/products/filters'
import {ListProducts} from '@/components/products/list'
import PaginationProducts from '@/components/products/pagination'
import SearchProducts from '@/components/products/searchProduct'
import TableComponent from '@/components/Table'
import {Title} from '@mantine/core'

async function IndexPage() {
  return (
    <TableComponent
      title="Table Products"
      subTitle="List and Filters of Products"
    >
      <SearchProducts />
      <FiltersProducts />
      <ListProducts />
      <PaginationProducts />
    </TableComponent>
  )
}

export default IndexPage
