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
    <div className={clsx(classes.appShell, 'container p-0')}>
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
          <Text className={classes.logo}>Admin Site</Text>
        </div>
      </Header>
      <div className="grid grid-cols-1 lg:grid-cols-6">
        <div className="col-span-1 relative">
          <Navbars opened={opened} setOpened={setOpened} />
        </div>
        <main className="col-span-5 ml-0 lg:ml-4">{children}</main>
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

  logo: {
    fontSize: '22px',
    fontWeight: 600,
  },
}))

export default ApplicationContainer
