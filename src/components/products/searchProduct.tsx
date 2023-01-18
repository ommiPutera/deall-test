'use client'

import useDebounce from '@/hooks/useDebounce'
import {useProductsStore} from '@/store/productsStore'
import React from 'react'
import TableSearch from '../Table/search'

async function getSearched(
  inputValue: string,
  limit: number,
  skip: number,
): Promise<any | null> {
  let url = `https://dummyjson.com/products/search?q=${inputValue}`
  if (limit) {
    url += '&limit=' + limit
  }
  if (skip || skip === 0) {
    url += '&skip=' + skip
  }

  try {
    const response = await fetch(url)
    if (!response?.ok) {
      return null
    }
    const json = await response.json()
    return json
  } catch (error) {
    return null
  }
}

function SearchProducts() {
  const {
    setProducts,
    isSearchEmpty,
    setIsLoading,
    limit,
    skip,
    setSkip,
    setLimit,
    setItems,
    setIsSearchEmpty,
  } = useProductsStore(state => state)
  const [search, setSearch] = React.useState('')
  const debouncedSearch = useDebounce({value: search, delay: 500})

  const handleSubmit = React.useCallback(async () => {
    const searchedItems = await getSearched(debouncedSearch, limit, skip)
    setItems(searchedItems)
    setProducts(searchedItems.products)
    setSkip(0)
    setLimit(10)
    setIsLoading(false)
  }, [
    debouncedSearch,
    limit,
    setIsLoading,
    setItems,
    setLimit,
    setProducts,
    setSkip,
    skip,
  ])

  const handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (e.currentTarget.value) {
      setSearch(e.currentTarget.value)
      setIsSearchEmpty(false)
      setIsLoading(true)
    } else if (!e.currentTarget.value) {
      setIsSearchEmpty(true)
      setIsLoading(false)
    }
  }

  React.useEffect(() => {
    if (debouncedSearch && !isSearchEmpty) {
      handleSubmit()
    }
  }, [debouncedSearch, handleSubmit, isSearchEmpty, setIsSearchEmpty])

  return <TableSearch onHandle={handleSearch} />
}

export default SearchProducts
