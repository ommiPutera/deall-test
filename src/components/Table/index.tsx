'use client'

import {createStyles, Select} from '@mantine/core'
import clsx from 'clsx'
import React from 'react'

function TableComponent({children}: {children: React.ReactNode}) {
  const {classes} = useStyles()

  return (
    <div
      className={clsx(
        'bg-white drop-shadow-sm border-gray-100 border-2 rounded-xl my-4',
      )}
    >
      {children}
    </div>
  )
}

const useStyles = createStyles(theme => ({
  wrapperFilters: {
    padding: '20px',
    width: '100%',

    '.mantine-Select-label': {
      paddingBottom: '5px',
    },
    '.mantine-Select-input': {
      padding: '20px 15px',
    },
  },

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

export default TableComponent
