'use client'

import useDebounce from '@/hooks/useDebounce'
import {useProductsStore} from '@/store/productsStore'
import React from 'react'
import TableSearch from '../Table/search'

async function getSearched(inputValue: string): Promise<any | null> {
  try {
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${inputValue}`,
    )
    if (!response?.ok) {
      return null
    }
    const json = await response.json()
    return json
  } catch (error) {
    return null
  }
}

function SearchProduct() {
  const {
    setProducts,
    isSearchEmpty,
    setIsLoading,
    setSkip,
    setLimit,
    setItems,
    setIsSearchEmpty,
  } = useProductsStore(state => state)
  const [search, setSearch] = React.useState('')
  const debouncedSearch = useDebounce({value: search, delay: 500})

  const handleSubmit = React.useCallback(async () => {
    const searchedItems = await getSearched(debouncedSearch)
    setItems(searchedItems)
    setProducts(searchedItems.products)
    setIsLoading(false)
    setSkip(0)
    setLimit(10)
  }, [debouncedSearch, setIsLoading, setItems, setLimit, setProducts, setSkip])

  const handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.value) {
      setSearch(e.currentTarget.value)
      setIsSearchEmpty(false)
      setIsLoading(true)
    } else if (!e.currentTarget.value) {
      setIsSearchEmpty(true)
    }
  }

  React.useEffect(() => {
    if (debouncedSearch && !isSearchEmpty) {
      handleSubmit()
    }
  }, [debouncedSearch, handleSubmit, isSearchEmpty, setIsSearchEmpty])

  return <TableSearch onHandle={handleSearch} />
}

export default SearchProduct
