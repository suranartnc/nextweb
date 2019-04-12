import React from 'react'
import { ThemeProvider } from 'emotion-theming'

import Navigation from './Navigation'
import Breadcrumb from './Breadcrumb'

const theme = {
  breakpoints: ['48em', '60em', '80em'], // [768px, 960px, 1280px]
}

export default function MainLayout({ children, breadcrumb }) {
  return (
    <ThemeProvider theme={theme}>
      <div css={{ maxWidth: 960, margin: '0 auto' }}>
        <Navigation />
        <Breadcrumb data={breadcrumb} />
        <main>{children}</main>
      </div>
    </ThemeProvider>
  )
}
