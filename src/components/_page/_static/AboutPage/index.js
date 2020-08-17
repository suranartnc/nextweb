import React from 'react'
import { Flex, Box } from '@grid'
import { inject } from '@lib/store'
import { Page } from '@lib/page'

import * as metaConfig from './meta'

function AboutPage({ uiStore }) {
  const { dimensions, orientation } = uiStore

  return (
    <Page metaConfig={metaConfig}>
      <Flex>
        <Box>About Page</Box>
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
