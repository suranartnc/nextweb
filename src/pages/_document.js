import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'
import Helmet from 'react-helmet'

import { getStatic } from '@lib/static'

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const documentProps = renderPage()
    const nextStyles = flush()

    return {
      ...documentProps,
      helmet: Helmet.renderStatic(),
      styles: null,
      nextStyles,
    }
  }

  render() {
    const { helmet } = this.props
    const htmlAttrs = helmet.htmlAttributes.toComponent()
    const bodyAttrs = helmet.bodyAttributes.toComponent()

    return (
      <html {...htmlAttrs}>
        <Head>
          {helmet.title.toComponent()}
          {helmet.meta.toComponent()}
          <link
            rel="preload"
            href={`${getStatic('css/fonts.css')}`}
            as="style"
          />
          <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
          <link rel="preconnect" href="https://www.googletagmanager.com" />
          {helmet.link.toComponent()}
          {this.props.nextStyles}
          {helmet.script.toComponent()}
        </Head>
        <body {...bodyAttrs}>
          {helmet.noscript.toComponent()}
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
