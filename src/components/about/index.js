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

AboutPage.getInitialProps = async function() {
  return {
    breadcrumb: [
      {
        label: 'About',
        route: {
          name: 'about',
        },
      },
    ],
  }
}

export default withPage()(AboutPage)
