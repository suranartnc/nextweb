import React from 'react'
import Helmet from 'react-helmet'
import { flowRight as compose } from 'lodash'
import { inject } from '@lib/store'

import withPage from '@lib/page/withPage'

function AboutPage({ uiStore }) {
  const { dimensions, orientation } = uiStore

  return (
    <div className="flex">
      <div>
        <Helmet title="About" />
        About Page
      </div>
      <div className="" w-full>
        <p>Window Dimension</p>
        <p>width: {dimensions.width}</p>
        <p>height: {dimensions.height}</p>
        <p>Orientation: {orientation}</p>
      </div>
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

export default compose(withPage(), inject('uiStore'))(AboutPage)
