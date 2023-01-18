'use client'

import AreaChart from '../charts/area'

const seriesArea = [
  {
    name: 'Tahun 2023',
    data: [25, 42, 80, 60, 42, 90],
  },
  {
    name: 'Tahun 2022',
    data: [10, 5, 12, 45, 20, 35],
  },
]

const categoriesArea = ['January', 'February', 'March', 'April', 'May', 'June']

function ChartsProducts() {
  return (
    <AreaChart
      series={seriesArea}
      categories={categoriesArea}
      size={{width: '100%', height: '350px'}}
    />
  )
}

export default ChartsProducts
