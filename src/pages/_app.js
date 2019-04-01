import React from 'react'
import App, { Container } from 'next/app'

import MainLayout from '@components/_layouts/main'

class MyApp extends App {
  render() {
    const { Component, router } = this.props

    return (
      <Container>
        <MainLayout>
          <Component {...this.props.pageProps} router={router} />
        </MainLayout>
      </Container>
    )
  }
}

export default MyApp
