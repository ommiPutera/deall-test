import {toUSD} from '@/lib/utils/currency'
import {createStyles, Loader, Table} from '@mantine/core'
import clsx from 'clsx'

interface IColumn {
  title: string
  key: string
  key2?: string
  render?: (e: any) => React.ReactNode
  className?: string
  formatUSD?: boolean
}
interface ITable {
  items: []
  columns: IColumn[]
  isLoading: boolean
}

function TableList({items, columns, isLoading}: ITable) {
  const {classes} = useStyles()

  return (
    <div className={classes.wrapperTable}>
      <Table
        horizontalSpacing="xl"
        verticalSpacing="xs"
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
          <TbodyContent items={items} columns={columns} isLoading={isLoading} />
        </tbody>
      </Table>
    </div>
  )
}

function TbodyContent({items, columns, isLoading}: ITable) {
  if (isLoading) return <LoadingTable columns={columns} />
  if (Boolean(items?.length)) {
    return (
      <>
        {items.map((item: any) => (
          <tr key={item.id}>
            {columns.map((column: IColumn) => {
              if (typeof column.render === 'function') {
                return <CustomTd key={column.key} column={column} item={item} />
              } else {
                return (
                  <DefaultTd key={column.key} column={column} item={item} />
                )
              }
            })}
          </tr>
        ))}
      </>
    )
  } else {
    return <NoDataComponent columns={columns} />
  }
}

function LoadingTable({columns}: {columns: IColumn[]}) {
  return (
    <tr>
      <td colSpan={columns.length}>
        <div className="flex justify-center items-center py-20">
          <Loader size="md" />
        </div>
      </td>
    </tr>
  )
}

function NoDataComponent({columns}: {columns: IColumn[]}) {
  return (
    <tr>
      <td colSpan={columns.length}>
        <div className="flex justify-center items-center py-20">No Data</div>
      </td>
    </tr>
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

function CustomTd({column, item}: {column: IColumn; item: any}) {
  if (column.render) {
    return <td key={column.key}>{column.render(item)}</td>
  }
  return <></>
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
          color: `${theme.colors.gray[4]} !important`,
          fontSize: '12px !important',
        },
      },
      '.tbody': {
        td: {
          color: theme.colors.gray[8],
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
