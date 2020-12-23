import React from 'react'
import useSWR from 'swr'
import isEmpty from 'lodash/isEmpty'

function fetcher(callService) {
  return callService()
}

export default function Fetch({
  children,
  service,
  onError,
  preloader = null,
}) {
  const { data, isValidating, error } = useSWR([service], fetcher)

  if (isValidating) {
    return typeof preloader === 'function'
      ? React.createElement(preloader)
      : preloader
  }

  if (error) {
    if (typeof onError === 'function') {
      return onError(error)
    }

    console.error(error)
    return null
  }

  if (isEmpty(data)) {
    return null
  }

  return children({ data })
}
