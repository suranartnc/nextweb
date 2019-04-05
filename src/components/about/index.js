import React from 'react'
import Helmet from 'react-helmet'

import withPage from '@lib/page/withPage'

function AboutPage() {
  return (
    <div>
      <Helmet title="About" />
      About Page
    </div>
  )
}

export default withPage({ layout: false })(AboutPage)
