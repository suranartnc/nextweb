import React from 'react'
import Error400Page from '@components/_error/400'

export default function Error404Page() {
  return <Error400Page routeMisMatched={true} />
}
