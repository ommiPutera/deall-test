'use client'

import Link from 'next/link'
import {useSelectedLayoutSegment} from 'next/navigation'
import {clsx, createStyles, Navbar, NavLink} from '@mantine/core'
import {IconFileDescription, IconArrowAutofitRight} from '@tabler/icons'

type NavbarsTypes = {
  opened: boolean
  setOpened: (o: boolean) => void
}

const mainLinksMockdata = [
  {
    icon: IconFileDescription,
    label: 'Products List',
    href: '/',
    segment: '(products)',
  },
  {
    icon: IconArrowAutofitRight,
    label: 'Carts List',
    href: '/carts',
    segment: 'carts',
  },
]

function Navbars({opened, setOpened}: NavbarsTypes) {
  const segment = useSelectedLayoutSegment()
  const {classes} = useStyles()

  const links = mainLinksMockdata.map(link => (
    <Link key={link.label} href={link.href} onClick={() => setOpened(!opened)}>
      <NavLink
        color="gray"
        className={clsx(classes.link, link.segment === segment ? 'active' : '')}
        active={link.segment === `${segment ?? ''}`}
        label={link.label}
        icon={<link.icon size={19} stroke={1} />}
      />
    </Link>
  ))

  return (
    <Navbar
      hiddenBreakpoint="sm"
      hidden={!opened}
      className={clsx(classes.navbar, 'bg-white w-auto')}
    >
      <Navbar.Section grow className={classes.wrapper}>
        <div className={classes.main}>{links}</div>
      </Navbar.Section>
    </Navbar>
  )
}

const useStyles = createStyles(theme => ({
  navbar: {
    border: 'none',
    position: 'sticky',
  },
  wrapper: {
    display: 'flex',
  },

  main: {
    flex: 1,
    padding: '10px 22px 0 0',
  },

  link: {
    borderRadius: '5px',
    height: '35px',
    margin: '7px 0',
    padding: '2px 10px',

    '.mantine-NavLink-label': {
      fontSize: '14px',
    },
  },
}))

export default Navbars
