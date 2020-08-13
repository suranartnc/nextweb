import React from 'react'
import Helmet from 'react-helmet'
import { Flex, Box } from '@grid'
import { inject } from '@lib/store'

import Page from '@components/_common/Page'

function AboutPage({ uiStore }) {
  const { dimensions, orientation } = uiStore

  return (
    <Page>
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

export default inject('uiStore')(AboutPage)
