import {List} from '@/components/carts/list'
import PaginationCarts from '@/components/carts/pagination'
import TableComponent from '@/components/Table'

async function CartsPage() {
  return (
    <TableComponent
      title="Table Products"
      subTitle="List and Filters of Products"
    >
      <List />
      <PaginationCarts />
    </TableComponent>
  )
}

export default CartsPage
