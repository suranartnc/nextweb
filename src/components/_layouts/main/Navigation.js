import React, { useContext } from 'react'
import { Link } from '@router'
import * as GTM from '@lib/stats/gtm'
import { userContext } from '@lib/firebase/auth'
import styled from '@emotion/styled'

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

const Nav = styled.nav`
  margin-bottom: 10px;
  border-bottom: 1px solid #aaa;
`

const NavLink = styled.a`
  display: inline-box;
  padding: 5px 15px 10px 0px;
  margin-right: 10px;
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
    <Nav>
      {mainMenus.map(menu => (
        <Link key={menu.name} to={menu.route}>
          <NavLink onClick={trackEvent(menu)}>{menu.name}</NavLink>
        </Link>
      ))}

      {userData ? (
        <Link key="Account" to="account">
          <NavLink onClick={trackEvent({ name: 'Account' })}>Account</NavLink>
        </Link>
      ) : (
        <Link key="Login" to="login">
          <NavLink onClick={trackEvent({ name: 'Login' })}>Login</NavLink>
        </Link>
      )}
    </Nav>
  )
}
