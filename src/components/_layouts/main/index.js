import React from 'react'
import Navigation from './Navigation'
import Breadcrumb from './Breadcrumb'

export default function MainLayout({ children }) {
  return (
    <div>
      <Navigation />
      <Breadcrumb />
      <main>{children}</main>
    </div>
  )
}
