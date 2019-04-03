import React from 'react'
import { get } from 'lodash'

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const isNotFound = get(res, 'statusCode') === 404
    const errorCode = get(err, 'statusCode', 500)
    const statusCode = isNotFound ? 404 : errorCode

    return { statusCode }
  }

  render() {
    const { statusCode } = this.props

    return (
      <p>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : 'An error occurred on client'}
      </p>
    )
  }
}

export default Error
