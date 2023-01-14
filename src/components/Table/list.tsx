import {toUSD} from '@/lib/utils/currency'
import {createStyles, Table} from '@mantine/core'
import clsx from 'clsx'

interface IColumn {
  title: string
  key: string
  key2?: string
  className?: string
  formatUSD?: boolean
}
interface ITable {
  items: []
  columns: IColumn[]
}

function TableList({items, columns}: ITable) {
  const {classes} = useStyles()

  return (
    <div className={classes.wrapperTable}>
      <Table
        horizontalSpacing="xl"
        verticalSpacing="md"
        striped
        highlightOnHover
        className="table"
      >
        <thead className="thead">
          <tr>
            {columns.map((column: IColumn) => (
              <th key={column.key}>{column.title}</th>
            ))}
          </tr>
        </thead>
        <tbody className={clsx('tbody', 'bg-white')}>
          {Boolean(items?.length) &&
            items.map((item: any) => (
              <tr key={item.id}>
                {columns.map((column: IColumn) => (
                  <DefaultTd key={column.key} column={column} item={item} />
                ))}
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  )
}

function DefaultTd({column, item}: {column: IColumn; item: any}) {
  const renderKey = () => {
    if (column.formatUSD) return toUSD(item[column.key])
    else return item[column.key]
  }

  return (
    <td key={column.key}>
      <span className={clsx(column?.className)}>{renderKey()}</span>
      <br />
      {column.key2 && (
        <p className="text-gray-500 text-xs leading-tight">
          {item[column.key2]}
        </p>
      )}
    </td>
  )
}

const useStyles = createStyles(theme => ({
  wrapperTable: {
    margin: '0 auto',
    overflowX: 'scroll',

    '.table': {
      thead: {
        borderBottom: '1px solid',
        borderColor: theme.colors.gray[5],

        th: {
          paddingTop: '18px',
          paddingBottom: '18px',
          textTransform: 'uppercase',
          color: `${theme.colors.gray[6]} !important`,
          fontSize: '11.5px !important',
        },
      },
      '.tbody': {
        td: {
          borderColor: theme.colors.gray[2],
          width: 'max-width',
          minWidth: '160px',
          maxWidth: '280px',
        },
      },
    },
  },
}))

export default TableList
