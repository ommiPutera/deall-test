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
    <div className="mx-4">
      <div className="p-4 mb-2 mt-3">
        <Title order={3}>{title}</Title>
        <Text className={clsx(classes.subTitle)}>{subTitle}</Text>
      </div>
      <div
        className={clsx(
          'bg-white border-gray-200 border rounded-lg my-4 overflow-hidden',
        )}
      >
        {children}
      </div>
    </div>
  )
}

const useStyles = createStyles(theme => ({
  subTitle: {
    marginTop: '4px',
    color: theme.colors.gray[6],
    fontSize: '13px',
  },
}))

export default TableComponent
