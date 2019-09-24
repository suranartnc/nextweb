import React from 'react'
import { get } from 'lodash'

import Error400Page from '@components/_error/400'
import Error500Page from '@components/_error/500'

export default function withErrorHandling(PageComponent) {
  function EnhancedPageComponent(props) {
    const statusCode = get(props, 'statusCode', 200)

    // If any error
    if (statusCode >= 500) {
      return <Error500Page />
    }

    // If no resource
    if (statusCode >= 400) {
      return <Error400Page />
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
