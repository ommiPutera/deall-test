import {createStyles} from '@mantine/core'
import {Suspense} from 'react'
import dynamic from 'next/dynamic'
import React from 'react'
const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
  suspense: true,
})

export interface ICharts {
  borderRadius?: number
  formatter?: Function
  sparkline?: boolean
  bar?: boolean
  size: {width: string; height: string}
  options?: any
  title?: {main: string; sub?: string}
  colors?: Array<string>
  categories?: Array<string>
  series: {
    name: string
    data: number[]
  }[]
}

function AreaChart({
  size,
  options,
  series,
  sparkline,
  colors,
  categories,
}: ICharts) {
  const {width, height} = size
  const {classes} = useStyles()

  const opt = {
    colors: colors,
    chart: {
      id: 'basic-column-chart',
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: sparkline,
      },
    },
    grid: {
      borderColor: '#E9E9EA',
      show: true,
      strokeDashArray: 4,
    },
    tooltip: {
      x: {
        show: false,
      },
    },
    stroke: {
      curve: 'smooth',
      width: 2.5,
      dashArray: 0,
    },
    fill: {
      gradient: {
        opacityFrom: 0.4,
        opacityTo: 0,
      },
    },
    dataLabels: {
      enabled: false,
    },
    yaxis: [
      {
        axisBorder: {
          show: false,
        },
        labels: {
          style: {
            colors: '#a9aaad',
            fontSize: '11px',
          },
        },
      },
    ],
    xaxis: {
      categories: categories,
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: '#a9aaad',
          fontSize: '11px',
        },
      },
    },
  }

  const chartOptions = {
    ...opt,
    ...options,
  }

  return (
    <div className={classes.wrapper}>
      <Suspense fallback={<div>Loading...</div>}>
        <Chart
          options={chartOptions}
          series={series}
          type="area"
          width={width}
          height={height}
        />
      </Suspense>
    </div>
  )
}

const useStyles = createStyles(theme => ({
  wrapper: {
    '.apexcharts-tooltip': {
      border: 'none',
      padding: '10px 4px 7px 4px',
      background: ' rgba(255, 255, 255, 0.4)',
      backdropFilter: 'blur(15px)',
      color: '#141517',
      fontWeight: 600,
      borderRadius: '15px',
      boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
    },
    '.apexcharts-tooltip-series-group': {
      fontSize: '10px',
      fontWeight: 500,
      color: '#141517',
    },
  },
}))

export default AreaChart
