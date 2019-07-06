import React from 'react'
import Async from 'react-async'
import { isEmpty } from 'lodash'

export default function Fetch({
  children,
  service,
  onError,
  preloader = 'Loading...',
}) {
  return (
    <Async promiseFn={service}>
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
