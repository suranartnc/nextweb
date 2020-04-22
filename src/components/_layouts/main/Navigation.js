import React, { forwardRef } from 'react'
import Link from '@link'
import { useMember } from '@lib/auth'

const mainMenus = [
  {
    name: 'Home',
    route: 'home',
  },
  {
    name: 'About',
    route: 'static-about',
  },
]

const LinkItem = forwardRef(({ menu, ...props }, ref) => (
  <a
    {...props}
    ref={ref}
    className="inline-block	pt-1 pr-3 pb-2 mr-12 lg:text-xl">
    {menu.name}
  </a>
))

export default function Navigation() {
  const { isAuthenticated } = useMember()

  return (
    <nav className="mb-8 border-b border-gray-600">
      {mainMenus.map(menu => (
        <Link key={menu.name} route={menu.route} passHref>
          <LinkItem menu={menu} />
        </Link>
      ))}

      {isAuthenticated ? (
        <Link key="Account" route="auth-account" passHref>
          <LinkItem menu={{ name: 'Account' }} />
        </Link>
      ) : (
        <Link key="Login" route="auth-login" passHref>
          <LinkItem menu={{ name: 'Login' }} />
        </Link>
      )}
    </nav>
  )
}
