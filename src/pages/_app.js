import App from 'next/app'
import Router from 'next/router'

import { StoreProvider } from '@lib/store'
import ThemeProvider from '@lib/styles/ThemeProvider'
import { AuthProvider } from '@lib/auth'
import { ErrorProvider } from '@lib/error'
import { font as fontConfig } from '@modules/_ui/config'

export default class MyApp extends App {
  componentDidMount() {
    const WebFont = require('webfontloader')
    WebFont.load(fontConfig)

    Router.events.on('routeChangeStart', url => {
      if (window.__NEXT_DATA__.props.isSSR === undefined) {
        window.__NEXT_DATA__.props.isSSR = false
      }
    })
  }

  render() {
    const { Component, router, pageProps } = this.props

    return (
      <ThemeProvider>
        <AuthProvider>
          <StoreProvider>
            <ErrorProvider>
              <Component {...pageProps} router={router} />
            </ErrorProvider>
          </StoreProvider>
        </AuthProvider>
      </ThemeProvider>
    )
  }
}
