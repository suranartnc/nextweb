import React from 'react'

import Error400Page from '@components/error/400'
import Error500Page from '@components/error/500'

function ErrorPage(props) {
  const { statusCode = 500 } = props
  const isError400 = statusCode >= 400 && statusCode < 500

  return isError400 ? <Error400Page /> : <Error500Page />
}

ErrorPage.getInitialProps = async function({ res, err }) {
  return {
    statusCode: res.statusCode === 404 ? res.statusCode : err.statusCode,
  }
}

export default ErrorPage
