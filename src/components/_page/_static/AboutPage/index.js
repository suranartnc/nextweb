import React, { Fragment } from 'react'
import { Flex, Box } from '@grid'
import { useStores, Observer } from '@lib/store'
import { Page } from '@lib/page'

import * as metaConfig from './meta'

export default function AboutPage() {
  const { UIStore } = useStores()

  return (
    <Page metaConfig={metaConfig}>
      <Flex>
        <Box>About Page</Box>
        <Box width={1}>
          <p>Window Dimension</p>
          <Observer>
            {() => (
              <Fragment>
                <p>width: {UIStore.dimensions.width}</p>
                <p>height: {UIStore.dimensions.height}</p>
              </Fragment>
            )}
          </Observer>
          <Observer>{() => <p>Orientation: {UIStore.orientation}</p>}</Observer>
        </Box>
      </Flex>
    </Page>
  )
}
