import React, { useContext } from 'react'
import { Link } from '@router'
import * as GTM from '@lib/stats/gtm'
import { userContext } from '@lib/firebase/auth'

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

const mainMenus = [
  {
    name: 'Home',
    route: 'home',
    icon: 'home',
  },
  {
    name: 'About',
    route: 'about',
    icon: 'users',
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

function LinkItem({ menu }) {
  return (
    <a
      onClick={trackEvent(menu)}
      css={{
        display: 'inline-box',
        padding: '5px 15px 10px 0px',
        marginRight: 10,
      }}>
      <Icon icon={menu.icon} />
      {menu.name}
    </a>
  )
}

export default function Navigation() {
  const userData = useContext(userContext)

  return (
    <nav css={{ marginBottom: 10, borderBottom: '1px solid #aaa' }}>
      {mainMenus.map(menu => (
        <Link key={menu.name} to={menu.route}>
          <LinkItem menu={menu} />
        </Link>
      ))}

      {userData ? (
        <Link key="Account" to="account">
          <LinkItem menu={{ name: 'Account', icon: 'user' }} />
        </Link>
      ) : (
        <Link key="Login" to="login">
          <LinkItem menu={{ name: 'Login', icon: 'sign-in-alt' }} />
        </Link>
      )}
    </nav>
  )
}
