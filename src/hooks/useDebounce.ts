import {useState, useEffect} from 'react'

type DebouncedType = {
  value: string
  delay: number
}

function useDebounce({value, delay}: DebouncedType) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}

export default useDebounce
