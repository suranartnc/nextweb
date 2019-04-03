import React from 'react'
import { get } from 'lodash'

function ErrorPage({ statusCode }) {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </p>
  )
}

ErrorPage.getInitialProps = async function({ res, err }) {
  const isNotFound = get(res, 'statusCode') === 404
  const errorCode = get(err, 'statusCode', 500)
  const statusCode = isNotFound ? 404 : errorCode

  return { statusCode }
}

export default ErrorPage
