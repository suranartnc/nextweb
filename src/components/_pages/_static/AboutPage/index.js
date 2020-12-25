import { Fragment } from 'react'
import { Flex, Box } from '@grid'
import { useStores, Observer } from '@lib/store'
import { Page } from '@lib/page'
import { useCSS } from '@lib/styles/fela'
import * as metaConfig from './meta'

export default function AboutPage() {
  const { UIStore } = useStores()
  const css = useCSS()

  return (
    <Page metaConfig={metaConfig}>
      <Flex>
        <Box>About Page</Box>
        <Box width={1}>
          <p className={css({ color: 'blue' })}>Window Dimension</p>
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
