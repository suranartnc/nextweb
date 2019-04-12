import React from 'react'
import { Flex, Box } from '@rebass/grid/emotion'

import withPage from '@lib/page/withPage'
import { getLatestArticles } from '@features/article/data/model'
import ArticleLatest from './ArticleLatest'

function HomePage({ articleLatest }) {
  return (
    <Flex flexWrap="wrap">
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

export default withPage()(HomePage)
