import Document, { Html, Head, Main, NextScript } from 'next/document'
import { renderToNodeList } from 'react-fela'

import { getStatic } from '@lib/static'
import { getFelaRenderer } from '@lib/styles/fela'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const renderer = getFelaRenderer()
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => <App {...props} renderer={renderer} />,
      })

    const initialProps = await Document.getInitialProps(ctx)
    const styles = renderToNodeList(renderer)

    return {
      ...initialProps,
      styles: [...initialProps.styles, ...styles],
    }
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
