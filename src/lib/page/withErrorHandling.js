import React from 'react'
import { get } from 'lodash'

import Error400Page from '@components/_error/400'
import Error500Page from '@components/_error/500'

export default function withErrorHandling(PageComponent) {
  class EnhancedPageComponent extends React.Component {
    state = {
      hasRuntimeError: false,
      error: {},
    }

    static getDerivedStateFromError(error) {
      const errorResponse = get(error, 'response', {})

      return {
        hasRuntimeError: true,
        error: errorResponse,
      }
    }

    componentDidCatch(error, errorInfo) {
      console.error('Runtime Error:', error, errorInfo)
    }

    render() {
      const statusCode = get(this.props, 'statusCode', 200)

      // If any runtime error
      if (this.state.hasRuntimeError) {
        return <Error500Page errorCode={this.state.error.errorCode} />
      }

      // If any error
      if (statusCode >= 500) {
        return <Error500Page />
      }

      // If no resource
      if (statusCode >= 400) {
        const errorCode = get(this.props, 'errorCode', '')
        return <Error400Page errorCode={errorCode} />
      }

      return <PageComponent {...this.props} />
    }
  }

  EnhancedPageComponent.getInitialProps = async function(ctx) {
    let pageProps = {}

    if (typeof PageComponent.getInitialProps === 'function') {
      try {
        pageProps = await PageComponent.getInitialProps(ctx)
      } catch (error) {
        console.error(error)

        const statusCode = get(error, 'response.status', 500)
        const errorCode = get(error, 'response.errorCode', '')

        if (ctx.res) {
          ctx.res.statusCode = statusCode
        }

        pageProps = {
          ...pageProps,
          statusCode,
          errorCode,
        }
      }
    }

    return pageProps
  }

  return EnhancedPageComponent
}
