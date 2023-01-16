'use client'

import {toUSD} from '@/lib/utils/currency'
import {useProductsStore} from '@/store/productsStore'
import {createStyles, Select, Table} from '@mantine/core'
import clsx from 'clsx'
import React from 'react'

function TableComponent({children}: {children: React.ReactNode}) {
  const {classes} = useStyles()

  return (
    <div className={clsx('bg-white drop-shadow rounded-xl')}>
      <div
        className={clsx(
          classes.wrapperFilters,
          'grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6',
        )}
      >
        <div className="w-full">
          <Select
            radius="md"
            className="item"
            label="Pick a hashtag"
            placeholder="Pick a hashtag"
            data={['React', 'Angular', 'Svelte', 'Vue']}
          />
        </div>
        <div className="w-full">
          <Select
            radius="md"
            label="Pick a hashtag"
            placeholder="Pick a hashtag"
            data={['React', 'Angular', 'Svelte', 'Vue']}
          />
        </div>
        <div className="w-full">
          <Select
            radius="md"
            label="Pick a hashtag"
            placeholder="Pick a hashtag"
            data={['React', 'Angular', 'Svelte', 'Vue']}
          />
        </div>
        <div className="w-full">
          <Select
            radius="md"
            label="Pick a hashtag"
            placeholder="Pick a hashtag"
            data={['React', 'Angular', 'Svelte', 'Vue']}
          />
        </div>
        <div className="w-full">
          <Select
            radius="md"
            label="Pick a hashtag"
            placeholder="Pick a hashtag"
            data={['React', 'Angular', 'Svelte', 'Vue']}
          />
        </div>
      </div>
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
