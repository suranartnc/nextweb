import React, { Fragment, useState } from 'react'
import { Flex, Box } from '@rebass/grid/emotion'

import withPage from '@lib/page/withPage'
import { getLatestArticles, getArticles } from '@features/article/data/model'
import ArticleLatest from './ArticleLatest'

function MoreArticles({ start, limit }) {
  const [lastStart, setLastStart] = useState(start)
  const [data, setData] = useState([])

  const fetchMore = async () => {
    const articles = await getArticles({ start: lastStart, limit })
    setLastStart(lastStart + articles.length)
    setData([...data, ...articles])
  }

  return (
    <Fragment>
      <ArticleLatest data={data} />
      <button onClick={fetchMore}>Load more</button>
    </Fragment>
  )
}

function HomePage({ articleLatest }) {
  return (
    <Flex flexWrap="wrap">
      <Box width={[1, 2 / 3]} pr={[0, 20]}>
        <ArticleLatest data={articleLatest} />
        <MoreArticles start={5} limit={5} />
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
