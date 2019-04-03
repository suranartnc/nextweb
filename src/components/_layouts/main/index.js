import React from 'react'
import Navigation from './Navigation'

export default function MainLayout({ children }) {
  return (
    <div>
      <Navigation />
      <main>{children}</main>
    </div>
  )
}
