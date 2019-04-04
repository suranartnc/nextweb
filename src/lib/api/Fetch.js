import React from 'react'
import Async from 'react-async'
import { get, isEmpty } from 'lodash'
import { throwError } from './helpers'

export default function Fetch({
  children,
  api,
  initialValue,
  onError,
  priority = 'low',
  preloader = 'Loading...',
}) {
  return (
    <Async promiseFn={api} initialValue={initialValue}>
      {({ data, error, isLoading }) => {
        if (isLoading) {
          return typeof preloader === 'function'
            ? React.createElement(preloader)
            : preloader
        }

        if (error) {
          if (typeof onError === 'function') {
            return onError(error)
          }

          if (priority === 'high') {
            const statusCode = get(error, 'response.status')
            throwError(statusCode)
          }

          return null
        }

        if (isEmpty(data)) {
          return null
        }

        return children({ data })
      }}
    </Async>
  )
}
