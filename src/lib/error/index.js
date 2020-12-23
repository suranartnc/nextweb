import React from 'react'
import get from 'lodash/get'

import Status404Page from '@components/_pages/_error/404'
import Status500Page from '@components/_pages/_error/500'

export function withErrorHandling(getServerSideProps) {
  return async context => {
    let pageProps = {}

    try {
      pageProps = await getServerSideProps(context)
    } catch (error) {
      console.error(error)

      const statusCode = get(error, 'response.status', 500)
      const errorCode = get(error, 'response.errorCode', '')

      if (context.res) {
        context.res.statusCode = statusCode
      }

      pageProps.props = { statusCode, errorCode }
    }

    return pageProps
  }
}

export class ErrorProvider extends React.Component {
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
    const statusCode = get(this.props.children, 'props.statusCode', 200)

    // If any runtime error
    if (this.state.hasRuntimeError) {
      return <Status500Page errorCode={this.state.error.errorCode} />
    }

    // If any error
    if (statusCode >= 500) {
      return <Status500Page />
    }

    // If api path not found
    if (statusCode >= 400) {
      const errorCode = get(this.props, 'errorCode', '')
      return <Status404Page errorCode={errorCode} />
    }

    return this.props.children
  }
}
