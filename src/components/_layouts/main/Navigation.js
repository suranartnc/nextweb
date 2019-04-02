import React from 'react'
import { Link } from '@router'
import { get } from 'lodash'

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
  const menus = get(mainMenus, '', [])

  return (
    <div>
      {menus.map(menu => (
        <Link key={menu.name} to={menu.route}>
          {menu.name}
        </Link>
      ))}
    </div>
  )
}
