import ChartProducts from 'components/products/charts'
import FiltersProducts from 'components/products/filters'
import {ListProducts} from 'components/products/list'
import PaginationProducts from 'components/products/pagination'
import SearchProducts from 'components/products/searchProduct'
import TableComponent from '@/components/table'
import {fromServer} from '@/lib/utils/passingProps'

async function IndexPage() {
  return (
    <>
      <ChartProducts />
      <TableComponent
        title="Table Products"
        subTitle="List and Filters of Products"
      >
        <SearchProducts />
        <FiltersProducts />
        <ListProducts />
        <PaginationProducts />
      </TableComponent>
    </>
  )
}

export default IndexPage
