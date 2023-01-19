import {List} from 'components/carts/list'
import PaginationCarts from 'components/carts/pagination'
import TableComponent from '@/components/table'

async function CartsPage() {
  return (
    <TableComponent title="Table Carts" subTitle="List and Detail Carts">
      <List />
      <PaginationCarts />
    </TableComponent>
  )
}

export default CartsPage
