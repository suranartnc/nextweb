import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import App from 'next/app'
import Router from 'next/router'
import { Provider as StoreProvider } from 'mobx-react'
import { CookiesProvider } from 'react-cookie'

import { AuthProvider } from '@lib/auth'
import { ErrorProvider } from '@lib/error'

import { initStore } from '@lib/store'
import * as font from '@lib/font'
import { GlobalStyles } from '@lib/styles'

export default class MyApp extends App {
  componentDidMount() {
    const WebFont = require('webfontloader')
    WebFont.load(font.config)

    Router.events.on('routeChangeStart', url => {
      if (window.__NEXT_DATA__.props.isSSR === undefined) {
        window.__NEXT_DATA__.props.isSSR = false
      }
    })
  }

  render() {
    const { Component, router } = this.props
    const rootStore = initStore()

    const children = (
      <Fragment>
        <GlobalStyles />
        <Helmet titleTemplate={`%s - nextweb.js`} />
        <AuthProvider>
          <StoreProvider RootStore={rootStore}>
            <ErrorProvider>
              <Component {...this.props.pageProps} router={router} />
            </ErrorProvider>
          </StoreProvider>
        </AuthProvider>
      </Fragment>
    )

    if (process.browser) {
      return <CookiesProvider>{children}</CookiesProvider>
    }

    return children
  }
}
