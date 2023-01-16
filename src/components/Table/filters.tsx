import {createStyles, Select} from '@mantine/core'
import clsx from 'clsx'

interface IFilter {
  options: string[]
  placeholder: string
  label: string
  key: string
  onHandleChange: (value: string) => void
}

interface IFilters {
  items: IFilter[]
}

function TableFilters({items}: IFilters) {
  const {classes} = useStyles()

  return (
    <div
      className={clsx(
        classes.wrapperFilters,
        'grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6',
      )}
    >
      {items.map(item => (
        <FilterItem
          key={item.key}
          options={item.options}
          label={item.label}
          placeholder={item.placeholder}
          onHandleChange={item.onHandleChange}
        />
      ))}
    </div>
  )
}

function FilterItem({options, placeholder, label, onHandleChange}: IFilter) {
  return (
    <div className="w-full">
      <Select
        radius="md"
        className="item"
        label={label}
        placeholder={placeholder}
        onChange={onHandleChange}
        data={options}
        clearable
      />
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
}))

export default TableFilters
