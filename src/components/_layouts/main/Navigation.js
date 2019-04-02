import React from 'react'
import { Link } from '@router'

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
  return (
    <div>
      {mainMenus.map(menu => (
        <Link key={menu.name} to={menu.route}>
          {menu.name}
        </Link>
      ))}
    </div>
  )
}
