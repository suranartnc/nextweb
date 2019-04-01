import React from 'react'
import Helmet from 'react-helmet'
import App, { Container } from 'next/app'

import MainLayout from '@components/_layouts/main'

class MyApp extends App {
  render() {
    const { Component, router } = this.props

    return (
      <Container>
        <MainLayout>
          <Helmet titleTemplate={`%s - nextweb.js`} />
          <Component {...this.props.pageProps} router={router} />
        </MainLayout>
      </Container>
    )
  }
}

export default MyApp
