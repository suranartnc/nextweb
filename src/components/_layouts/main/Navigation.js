import React, { useContext } from 'react'
import { Link } from '@router'
import * as GTM from '@lib/stats/gtm'
import { userContext } from '@lib/firebase/auth'

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
    <nav>
      {mainMenus.map(menu => (
        <Link key={menu.name} to={menu.route}>
          <a onClick={trackEvent(menu)}>{menu.name}</a>
        </Link>
      ))}

      {userData ? (
        <Link key="Account" to="account">
          <a onClick={trackEvent({ name: 'Account' })}>Account</a>
        </Link>
      ) : (
        <Link key="Login" to="login">
          <a onClick={trackEvent({ name: 'Login' })}>Login</a>
        </Link>
      )}

      <style jsx>{`
        nav {
          margin-bottom: 10px;
          border-bottom: 1px solid #aaa;
        }
        a {
          display: inline-box;
          padding: 5px 15px 10px 0px;
          margin-right: 10px;
        }
      `}</style>
    </nav>
  )
}
