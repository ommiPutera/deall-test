'use client'

import React, {useState} from 'react'
import {
  AppShell,
  Header,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from '@mantine/core'
import Navbars from './Navbars'

type AppShellTypes = {
  children: React.ReactNode | JSX.Element
}

export default function ApplicationContainer({children}: AppShellTypes) {
  const theme = useMantineTheme()
  const [opened, setOpened] = useState(false)

  return (
    <AppShell
      styles={{
        main: {
          margin: '0 auto',
          backgroundColor: theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={<Navbars opened={opened} />}
      header={
        <Header height={{base: 50, md: 70}} p="md">
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
      }
    >
      {children}
    </AppShell>
  )
}
