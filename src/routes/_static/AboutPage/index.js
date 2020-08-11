import React from 'react'
import Helmet from 'react-helmet'
import { Flex, Box } from '@grid'
import { flowRight as compose } from 'lodash'
import { inject } from '@lib/store'

import Page from '@components/Page'
import withPage from '@lib/page/withPage'

function AboutPage({ uiStore }) {
  const { dimensions, orientation } = uiStore

  return (
    <Page options={{ restricted: true }}>
      <Flex>
        <Box>
          <Helmet title="About" />
          About Page
        </Box>
        <Box width={1}>
          <p>Window Dimension</p>
          <p>width: {dimensions.width}</p>
          <p>height: {dimensions.height}</p>
          <p>Orientation: {orientation}</p>
        </Box>
      </Flex>
    </Page>
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
