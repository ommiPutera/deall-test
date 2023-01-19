'use client'

import AreaChart from '../charts/area'
import React from 'react'
import {Text, Title} from '@mantine/core'

async function getBrands(): Promise<any | null> {
  let url = 'api/products/brand'

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

function ChartProducts() {
  const [brands, setBrands] = React.useState<{
    data: number[]
    categories: string[]
  }>({
    data: [],
    categories: [],
  })
  const seriesArea = [
    {
      name: 'Number of items per brand',
      data: brands.data,
    },
  ]

  const categoriesArea = brands.categories

  const getProductsOfBrands = React.useCallback(async () => {
    let numberItems: number[] = []
    let categoryItems: string[] = []
    await getBrands().then(res => {
      for (let i = 0; i < res.brands.length; i++) {
        numberItems.push(res.brands[i].total)
        categoryItems.push(res.brands[i].product)
      }
    })
    setBrands({
      data: numberItems,
      categories: categoryItems,
    })
  }, [])

  React.useEffect(() => {
    getProductsOfBrands()
  }, [getProductsOfBrands])

  return (
    <div style={{minHeight: '30vh', marginBottom: '20px'}}>
      <div className="p-4 mb-2 mt-3">
        <Title order={3}>Brands Chart</Title>
        <Text>Number of items per brand</Text>
      </div>
      <AreaChart
        series={seriesArea}
        categories={categoriesArea}
        size={{width: '100%', height: '350px'}}
      />
    </div>
  )
}

export default ChartProducts
