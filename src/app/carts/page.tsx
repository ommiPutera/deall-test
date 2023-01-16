import {List} from '@/components/carts/list'
import PaginationProduct from '@/components/carts/pagination'
import TableComponent from '@/components/Table'

async function CartsPage() {
  return (
    <TableComponent>
      <List />
      <PaginationProduct />
    </TableComponent>
  )
}

export default CartsPage
