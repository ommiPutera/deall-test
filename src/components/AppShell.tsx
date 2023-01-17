'use client'

import React, {useState} from 'react'
import {
  AppShell,
  Header,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  createStyles,
} from '@mantine/core'
import Navbars from './Navbars'
import clsx from 'clsx'

type AppShellTypes = {
  children: React.ReactNode | JSX.Element
}

function ApplicationContainer({children}: AppShellTypes) {
  const theme = useMantineTheme()
  const {classes} = useStyles()
  const [opened, setOpened] = useState(false)

  return (
    <div className={clsx(classes.appShell, 'container')}>
      <Header
        height={{base: 50, md: 70}}
        p="md"
        className="header sticky top-0"
      >
        <div style={{display: 'flex', alignItems: 'center', height: '100%'}}>
          <MediaQuery largerThan="sm" styles={{display: 'none'}}>
            <Burger
              opened={opened}
              onClick={() => setOpened(o => !o)}
              size="sm"
              color={theme.colors.gray[6]}
              mr="xl"
            />
          </MediaQuery>
          <Text>Application header</Text>
        </div>
      </Header>
      <div className="grid grid-cols-1 lg:grid-cols-5">
        <div className="col-span-1 relative">
          <Navbars opened={opened} />
        </div>
        <main className="col-span-4 ml-0 lg:ml-6">{children}</main>
      </div>
    </div>
  )
}

const useStyles = createStyles(theme => ({
  appShell: {
    '.header': {
      position: 'sticky',
    },
  },
}))

export default ApplicationContainer
