'use client'

import {Table} from '@mantine/core'

function TableComponent({items, columns}: any) {
  return (
    <Table>
      <thead>
        <tr>
          {columns.map((column: any) => (
            <td key={column.key}>{column.title}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {Boolean(items?.length) &&
          items.map((item: any) => (
            <tr key={item.id}>
              {columns.map((column: any) => (
                <td key={column.key}>{item[column.key]}</td>
              ))}
            </tr>
          ))}
      </tbody>
    </Table>
  )
}

export default TableComponent
