import { Component } from 'react'
import get from 'lodash/get'

import Error400Page from '@components/_error/400'
import Error500Page from '@components/_error/500'

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

export class ErrorProvider extends Component {
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
      return <Error500Page errorCode={this.state.error.errorCode} />
    }

    // If any error
    if (statusCode >= 500) {
      return <Error500Page statusCode={statusCode} />
    }

    // If no resource
    if (statusCode >= 400) {
      const errorCode = get(this.props.children, 'props.errorCode', '')
      return <Error400Page statusCode={statusCode} errorCode={errorCode} />
    }

    return this.props.children
  }
}
