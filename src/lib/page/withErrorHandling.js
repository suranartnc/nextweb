import React from 'react'
import { get } from 'lodash'
import ErrorPage from '../../pages/_error'

export default function withErrorHandling(PageComponent) {
  function EnhancedPageComponent(props) {
    const statusCode = get(props, 'statusCode', 200)

    if (statusCode >= 500) {
      return <ErrorPage statusCode={statusCode} />
    }

    if (statusCode >= 400) {
      return <ErrorPage statusCode={statusCode} />
    }

    return <PageComponent {...props} />
  }

  EnhancedPageComponent.getInitialProps = async function(ctx) {
    let pageProps = {}

    if (typeof PageComponent.getInitialProps === 'function') {
      try {
        pageProps = await PageComponent.getInitialProps(ctx)
      } catch (error) {
        console.error(error)

        const statusCode = get(error, 'response.status', 500)

        if (ctx.res) {
          ctx.res.statusCode = statusCode
        }

        pageProps = {
          ...pageProps,
          statusCode,
        }
      }
    }

    return pageProps
  }

  return EnhancedPageComponent
}
