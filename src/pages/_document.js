import Document, { Html, Head, Main, NextScript } from 'next/document'
import { getStatic } from '@lib/static'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preload"
            href={`${getStatic('css/fonts.css')}`}
            as="style"
          />
          <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
          <link rel="preconnect" href="https://www.googletagmanager.com" />
          <link rel="shortcut icon" href={`${getStatic('favicon.ico')}`} />
          {this.props.nextStyles}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
