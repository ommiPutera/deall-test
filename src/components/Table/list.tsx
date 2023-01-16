'use client'

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
  const columnsLength = columns.length

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
          {Boolean(items?.length) && (
            <tr>
              {columns.map((column: IColumn) => (
                <th key={column.key}>{column.title}</th>
              ))}
            </tr>
          )}
        </thead>
        <tbody
          className={clsx('tbody', 'bg-white', isLoading ? 'loading' : '')}
        >
          {Boolean(items?.length) && isLoading ? (
            <LoadingBackground columnsLength={columnsLength} />
          ) : null}
          <TbodyContent items={items} columns={columns} isLoading={isLoading} />
        </tbody>
      </Table>
    </div>
  )
}

function TbodyContent({items, columns, isLoading}: ITable) {
  if (!Boolean(items?.length) && isLoading)
    return <LoadingTable columnsLength={columns.length} />
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
    return <NoDataComponent columnsLength={columns.length} />
  }
}

function LoadingBackground({columnsLength}: {columnsLength: number}) {
  return (
    <tr className="loadingBg flex justify-center items-center">
      <td
        className="bg-white rounded-md text-center text-sm font-bold"
        colSpan={columnsLength}
      >
        Loading..
      </td>
    </tr>
  )
}

function LoadingTable({columnsLength}: {columnsLength: number}) {
  return (
    <tr>
      <td colSpan={columnsLength}>
        <div className="flex justify-center items-center py-20 bg-white">
          <Loader size="md" />
        </div>
      </td>
    </tr>
  )
}

function NoDataComponent({columnsLength}: {columnsLength: number}) {
  return (
    <tr>
      <td colSpan={columnsLength}>
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
        overflow: 'scroll',
        td: {
          color: theme.colors.gray[8],
          borderColor: theme.colors.gray[2],
          width: 'max-width',
          minWidth: '100px',
          maxWidth: '260px',
        },
      },
      '.loading': {
        position: 'relative',
        '.loadingBg': {
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.3)',
          position: 'absolute',
        },
      },
    },
  },
}))

export default TableList
