import React, { useContext } from 'react'
import Link from '@link'
import * as GTM from '@lib/stats/gtm'
import { userContext } from '@lib/auth'
import { media } from '@lib/styles'

const mainMenus = [
  {
    name: 'Home',
    route: 'home',
  },
  {
    name: 'About',
    route: 'about',
  },
]

const trackEvent = menu => () => {
  GTM.logEvent({
    category: 'Navigation',
    action: 'Clicked',
    label: menu.name,
    dimension1: 'dimension1',
    dimension2: 'dimension2',
  })
}

function LinkItem({ menu, ...props }) {
  return (
    <a
      {...props}
      onClick={e => {
        props.onClick(e)
        trackEvent(menu)
      }}
      css={{
        display: 'inline-box',
        padding: '5px 15px 10px 0px',
        marginRight: 10,
        [media('md')]: {
          fontSize: '1.2em',
        },
      }}>
      {menu.name}
    </a>
  )
}

export default function Navigation() {
  const { isAuthenticated } = useContext(userContext)

  return (
    <nav css={{ marginBottom: 10, borderBottom: '1px solid #aaa' }}>
      {mainMenus.map(menu => (
        <Link key={menu.name} route={menu.route} passHref>
          <LinkItem menu={menu} />
        </Link>
      ))}

      {isAuthenticated ? (
        <Link key="Account" route="account" passHref>
          <LinkItem menu={{ name: 'Account' }} />
        </Link>
      ) : (
        <Link key="Login" route="login" passHref>
          <LinkItem menu={{ name: 'Login' }} />
        </Link>
      )}
    </nav>
  )
}
