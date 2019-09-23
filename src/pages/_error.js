import React from 'react'

import Error400Page from '@components/_error/400'
import Error500Page from '@components/_error/500'

import withPageError from '@lib/page/withPageError'

function ErrorNotFoundPage({ statusCode = 500 }) {
  const isError400 = statusCode >= 400 && statusCode < 500

  return isError400 ? <Error400Page routeMisMatched={true} /> : <Error500Page />
}

ErrorNotFoundPage.getInitialProps = async function({ res, err = {} }) {
  return {
    statusCode: res.statusCode === 404 ? res.statusCode : err.statusCode,
  }
}

export default withPageError()(ErrorNotFoundPage)
