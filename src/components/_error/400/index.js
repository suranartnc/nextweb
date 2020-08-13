import React from 'react'

import Page from '@components/Page'

import NoResource from './NoResource'
import NotFound from './NotFound'

export default function Error400Page({ routeMisMatched, ...props }) {
  return (
    <Page>
      {routeMisMatched ? <NotFound {...props} /> : <NoResource {...props} />}
    </Page>
  )
}
