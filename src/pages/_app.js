import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import App from 'next/app'
import { Provider } from 'mobx-react'

import initStore from '@lib/store'
import { getStatic } from '@lib/static'
import { GlobalStyles } from '@lib/styles'

class MyApp extends App {
  componentDidMount() {
    const WebFont = require('webfontloader')

    WebFont.load({
      custom: {
        urls: [
          getStatic('css/fonts.css'),
          // 'https://fonts.googleapis.com/css?family=Mitr:200,300,500%7CSarabun:400,700&display=swap',
        ],
      },
    })
  }

  render() {
    const { Component, router } = this.props
    const rootStore = initStore()

    return (
      <Fragment>
        <GlobalStyles />
        <Helmet titleTemplate={`%s - nextweb.js`} />
        <Provider RootStore={rootStore}>
          <Component {...this.props.pageProps} router={router} />
        </Provider>
      </Fragment>
    )
  }
}

export default MyApp
