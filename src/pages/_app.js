import React from 'react'
import Helmet from 'react-helmet'
import App, { Container } from 'next/app'
import { flowRight as compose } from 'lodash'

import { withFirebase } from '@lib/firebase'
import { withAuth } from '@lib/firebase/auth'
import { UserAgentContext, withUA } from '@lib/userAgent'

import { GlobalStyles } from '@lib/styles'

let WebFont

class MyApp extends App {
  componentDidMount() {
    WebFont = require('webfontloader')

    WebFont.load({
      google: {
        families: ['Open Sans:300,700'],
      },
    })
  }
  render() {
    const { Component, router, userAgent } = this.props

    return (
      <Container>
        <UserAgentContext.Provider value={userAgent}>
          <GlobalStyles />
          <Helmet titleTemplate={`%s - nextweb.js`} />
          <Component {...this.props.pageProps} router={router} />
        </UserAgentContext.Provider>
      </Container>
    )
  }
}

export default compose(
  withUA,
  withFirebase,
  withAuth,
)(MyApp)
