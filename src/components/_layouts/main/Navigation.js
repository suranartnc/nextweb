import React, { forwardRef } from 'react'
import Link from '@link'
import { useMember } from '@lib/auth'
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

const LinkItem = forwardRef((props, ref) => (
  <a
    {...props}
    ref={ref}
    css={{
      display: 'inline-box',
      padding: '5px 15px 10px 0px',
      marginRight: 50,
      [media('md')]: {
        fontSize: '1.2em',
      },
    }}>
    {props.menu.name}
  </a>
))

export default function Navigation() {
  const { isAuthenticated } = useMember()

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
