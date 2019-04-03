import React from 'react'
import Async from 'react-async'
import { get } from 'lodash'

export default function Fetch({
  children,
  api,
  initialValue,
  onError,
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
          return typeof onError === 'function' ? onError(error) : null
        }

        if (get(data, 'length', 0) === 0) {
          return null
        }

        return children({ data })
      }}
    </Async>
  )
}
