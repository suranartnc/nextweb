import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import Notifications from './Notifications'
import Navigation from './Navigation'
import breakpoints from '@features/_ui/config/breakpoints'

const theme = {
  breakpoints: Object.keys(breakpoints).map(key => breakpoints[key]),
}

export default function MainLayout({ children, breadcrumb }) {
  return (
    <ThemeProvider theme={theme}>
      <div css={{ maxWidth: 960, margin: '0 auto' }}>
        <Notifications />
        <Navigation />
        <main>{children}</main>
      </div>
    </ThemeProvider>
  )
}
