import React from 'react'

import Page from '@components/Page'
import InternalServerError from './InternalServerError'

export default function Error500Page(props) {
  return (
    <Page>
      <InternalServerError {...props} />
    </Page>
  )
}
