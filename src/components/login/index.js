import React from 'react'
import Helmet from 'react-helmet'

import withPage from '@lib/page/withPage'

function LoginPage() {
  return (
    <div>
      <Helmet title="Login" />
      Login Page
    </div>
  )
}

export default withPage({ layout: false })(LoginPage)
