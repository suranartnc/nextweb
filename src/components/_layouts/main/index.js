import React from 'react'
import Notifications from './Notifications'
import Navigation from './Navigation'

export default function MainLayout({ children, breadcrumb }) {
  return (
    <div>
      <Notifications />
      <Navigation />
      <main>{children}</main>
    </div>
  )
}
