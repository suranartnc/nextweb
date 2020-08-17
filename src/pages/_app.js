import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import App from 'next/app'
import Router from 'next/router'
import { Provider as StoreProvider } from 'mobx-react'

import { AuthProvider } from '@lib/auth'
import { ErrorProvider } from '@lib/error'
import { initStore } from '@lib/store'
import { BaseStyles } from '@lib/styles'
import fontConfig from '@features/_ui/config/font'

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
    const { Component, router } = this.props
    const rootStore = initStore()

    return (
      <Fragment>
        <BaseStyles />
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
  }
}
