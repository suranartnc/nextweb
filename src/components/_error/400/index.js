import React from 'react'

import NoResource from './NoResource'
import NotFound from './NotFound'

export default function Error400Page({ routeMisMatched, ...props }) {
  return routeMisMatched ? <NotFound {...props} /> : <NoResource {...props} />
}
