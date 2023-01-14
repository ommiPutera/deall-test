'use client'

import Link from 'next/link'
import {useSelectedLayoutSegment} from 'next/navigation'
import {createStyles, Navbar, NavLink} from '@mantine/core'
import {IconHome2, IconGauge} from '@tabler/icons'

type NavbarsTypes = {
  opened: boolean
}

const mainLinksMockdata = [
  {icon: IconHome2, label: 'Products', href: '/', segment: '(products)'},
  {icon: IconGauge, label: 'Carts', href: '/carts', segment: 'carts'},
]

function Navbars({opened}: NavbarsTypes) {
  const segment = useSelectedLayoutSegment()
  const {classes} = useStyles()

  const links = mainLinksMockdata.map(link => (
    <Link key={link.label} href={link.href}>
      <NavLink
        className={classes.link}
        variant="filled"
        active={link.segment === `${segment ?? ''}`}
        label={link.label}
        icon={<link.icon size={19} stroke={2} />}
      />
    </Link>
  ))

  return (
    <Navbar
      hiddenBreakpoint="sm"
      hidden={!opened}
      width={{sm: 200, lg: 300}}
      className="bg-white"
    >
      <Navbar.Section grow className={classes.wrapper}>
        <div className={classes.main}>{links}</div>
      </Navbar.Section>
    </Navbar>
  )
}

const useStyles = createStyles(theme => ({
  wrapper: {
    display: 'flex',
  },

  main: {
    flex: 1,
    padding: '15px 28px',
  },

  link: {
    borderRadius: '7px',
    height: '45px',
    margin: '10px 0',
    fontSize: '14px',
  },
}))

export default Navbars
