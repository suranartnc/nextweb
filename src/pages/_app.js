import React from 'react'
import Helmet from 'react-helmet'
import App, { Container } from 'next/app'
import { flowRight as compose } from 'lodash'

import withFirebase from '@lib/app/withFirebase'
import withFirebaseAuth from '@lib/app/withFirebaseAuth'
import withData from '@lib/app/withData'
import GlobalStyles from '@lib/styles/GlobalStyles'

class MyApp extends App {
  render() {
    const { Component, router } = this.props

    return (
      <Container>
        <GlobalStyles />
        <Helmet titleTemplate={`%s - nextweb.js`} />
        <Component {...this.props.pageProps} router={router} />
      </Container>
    )
  }
}

export default compose(
  withData,
  withFirebase,
  withFirebaseAuth,
)(MyApp)
