'use client'

import {createStyles, Text, Title} from '@mantine/core'
import clsx from 'clsx'
import React from 'react'

function TableComponent({
  children,
  title,
  subTitle,
}: {
  children: React.ReactNode
  title: string
  subTitle: string
}) {
  const {classes} = useStyles()

  return (
    <>
      <div className="p-4 mb-2">
        <Title order={2}>{title}</Title>
        <Text className="ml-1">{subTitle}</Text>
      </div>
      <div className={clsx('bg-white border-gray-200 border rounded-lg my-4')}>
        {children}
      </div>
    </>
  )
}

const useStyles = createStyles(theme => ({}))

export default TableComponent
