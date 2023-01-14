'use client'

import {useProductsStore} from '@/store/productsStore'
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
  const {products, setProducts} = useProductsStore(state => state)

  const handleSearch = async (e: any) => {
    const searchedItems = await getSearched(e.target.value)
    setProducts(searchedItems.products)
  }

  return <TableSearch onHandle={handleSearch} />
}

export default SearchProduct
