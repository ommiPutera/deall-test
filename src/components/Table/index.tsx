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
  subTitle?: string
}) {
  const {classes} = useStyles()

  return (
    <>
      <div className="p-4 mb-2">
        <Title order={3}>{title}</Title>
        <Text className="ml-1 text-gray-400">{subTitle}</Text>
      </div>
      <div
        className={clsx(
          'bg-white border-gray-200 border rounded-lg my-4 overflow-hidden',
        )}
      >
        {children}
      </div>
    </>
  )
}

const useStyles = createStyles(theme => ({}))

export default TableComponent
