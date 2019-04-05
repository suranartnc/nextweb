import React from 'react'
import { Link } from '@router'
import * as GTM from '@lib/stats/gtm'

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
  const trackEvent = menu => () =>
    GTM.logEvent({
      category: 'Navigation',
      action: 'Clicked',
      label: menu.name,
      dimension1: 'dimension1',
      dimension2: 'dimension2',
    })

  return (
    <div>
      {mainMenus.map(menu => (
        <Link key={menu.name} to={menu.route}>
          <a onClick={trackEvent(menu)}>{menu.name}</a>
        </Link>
      ))}
    </div>
  )
}
