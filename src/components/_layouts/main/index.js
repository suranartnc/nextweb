import React from 'react'
import Navigation from './Navigation'
import Breadcrumb from './Breadcrumb'

export default function MainLayout({ children, breadcrumb }) {
  return (
    <div>
      <Navigation />
      <Breadcrumb data={breadcrumb} />
      <main>{children}</main>
    </div>
  )
}
