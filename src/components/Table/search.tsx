'use client'

import {createStyles, Input, Tooltip} from '@mantine/core'
import {IconSearch} from '@tabler/icons'
import clsx from 'clsx'

type SearchType = {
  onHandle: (e: React.FormEvent<HTMLInputElement>) => void
}

function TableSearch({onHandle}: SearchType) {
  const {classes} = useStyles()

  return (
    <div
      className={clsx(
        classes.wrapperSearch,
        'grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6',
      )}
    >
      <div></div>
      <div></div>
      <div></div>
      <div className="w-full">
        <Input
          onChange={onHandle}
          radius="md"
          type="input"
          placeholder="Search by product name."
          rightSection={
            <Tooltip label="search product" position="top-end" withArrow>
              <div>
                <IconSearch
                  size={18}
                  style={{display: 'block', opacity: 0.5}}
                />
              </div>
            </Tooltip>
          }
        />
      </div>
    </div>
  )
}

const useStyles = createStyles(theme => ({
  wrapperSearch: {
    padding: '20px 15px',
    width: '100%',

    '.mantine-Input.Wrapper-label': {
      paddingBottom: '5px',
    },
  },
}))

export default TableSearch
