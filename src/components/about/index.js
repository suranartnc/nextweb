import React from 'react'
import Helmet from 'react-helmet'
import { Flex, Box } from '@rebass/grid/emotion'
import { flowRight as compose } from 'lodash'
import { inject, observer } from 'mobx-react'

import withPage from '@lib/page/withPage'

function AboutPage({ RootStore: { uiStore } }) {
  const { dimensions, orientation } = uiStore

  return (
    <Flex flexWrap="wrap">
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

export default compose(
  withPage(),
  inject('RootStore'),
  observer,
)(AboutPage)
