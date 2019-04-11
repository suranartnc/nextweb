import React, { useContext } from 'react'
import { Link } from '@router'
import * as GTM from '@lib/stats/gtm'
import { userContext } from '@lib/firebase/auth'
import { css } from '@emotion/core'

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

const style = css`
  margin-bottom: 10px;
  border-bottom: 1px solid #aaa;
  a {
    display: inline-box;
    padding: 5px 15px 10px 0px;
    margin-right: 10px;
  }
`

export default function Navigation() {
  const userData = useContext(userContext)

  const trackEvent = menu => () => {
    GTM.logEvent({
      category: 'Navigation',
      action: 'Clicked',
      label: menu.name,
      dimension1: 'dimension1',
      dimension2: 'dimension2',
    })
  }

  return (
    <nav css={style}>
      {mainMenus.map(menu => (
        <Link key={menu.name} to={menu.route}>
          <a onClick={trackEvent(menu)}>
            <Icon icon={menu.icon} />
            {menu.name}
          </a>
        </Link>
      ))}

      {userData ? (
        <Link key="Account" to="account">
          <a onClick={trackEvent({ name: 'Account' })}>
            <Icon icon="user" />
            Account
          </a>
        </Link>
      ) : (
        <Link key="Login" to="login">
          <a onClick={trackEvent({ name: 'Login' })}>
            <Icon icon="sign-in-alt" />
            Login
          </a>
        </Link>
      )}
    </nav>
  )
}
