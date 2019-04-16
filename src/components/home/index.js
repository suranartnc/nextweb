import React from 'react'
import { flowRight as compose } from 'lodash'
import { observer, inject } from 'mobx-react'
import { Flex, Box } from '@rebass/grid/emotion'

import withPage from '@lib/page/withPage'
import { getLatestArticles } from '@features/article/data/model'
import ArticleLatest from './ArticleLatest'

function HomePage({ articleLatest, RootStore: { uiStore } }) {
  return (
    <Flex flexWrap="wrap">
      <Box width={1}>
        <p>Window Dimension</p>
        <p>width: {uiStore.dimensions.width}</p>
        <p>height: {uiStore.dimensions.height}</p>
      </Box>

      <Box width={[1, 2 / 3]} pr={[0, 20]}>
        <ArticleLatest data={articleLatest} />
      </Box>

      <Box width={[1, 1 / 3]} pl={[0, 20]}>
        <div>Sidebar</div>
      </Box>
    </Flex>
  )
}

HomePage.getInitialProps = async () => {
  const articleLatest = await getLatestArticles()

  return {
    title: 'Home',
    articleLatest,
  }
}

export default compose(
  withPage(),
  inject('RootStore'),
  observer,
)(HomePage)
