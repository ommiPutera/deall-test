'use client'

import TableList from '@/components/table/list'
import {toUSD} from 'lib/utils/currency'

function ListProducts({items}: {items: []}) {
  const columns = [
    {
      title: 'Product Name',
      key: 'title',
      key2: 'rating',
      className: 'font-bold',
      render: (row: any) => (
        <div>
          <p className="font-bold">{toUSD(row.title)}</p>
        </div>
      ),
    },
    {
      title: 'Price',
      key: 'price',
      key2: 'discountPercentage',
      render: (row: any) => (
        <div>
          <p className="font-bold">{toUSD(row.price)}</p>
          <p className="text-orange-400 text-xs">
            Discount: {row.discountPercentage}%
          </p>
        </div>
      ),
      formatUSD: true,
    },
    {title: 'Quantity', key: 'quantity'},
    {
      title: 'Total',
      key: 'total',
      render: (row: any) => (
        <div>
          <p>{toUSD(row.total)}</p>
        </div>
      ),
    },
  ]

  return <TableList items={items} columns={columns} />
}

export default ListProducts
