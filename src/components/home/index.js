import React, { Fragment, useState } from 'react'
import { Flex, Box } from '@rebass/grid/emotion'

import withPage from '@lib/page/withPage'
import { getLatestArticles, getArticles } from '@features/article/data/model'
import ArticleLatest, { ArticleList } from './ArticleLatest'

function FetchMore({ children, api, start, limit }) {
  const [lastStart, setLastStart] = useState(start)
  const [data, setData] = useState([])

  const fetchMore = async () => {
    const newData = await api({ start: lastStart, limit })
    setLastStart(lastStart + newData.length)
    setData(data.concat(newData))
  }

  return children({ data, fetchMore })
}

function HomePage({ articleLatest }) {
  return (
    <Flex flexWrap="wrap">
      <Box width={[1, 2 / 3]} pr={[0, 20]}>
        <ArticleLatest data={articleLatest} />

        <FetchMore
          api={({ start, limit }) => getArticles({ start, limit })}
          start={5}
          limit={5}>
          {({ data, fetchMore }) => {
            return (
              <Fragment>
                <ArticleList data={data} />
                <button onClick={fetchMore}>Load more</button>
              </Fragment>
            )
          }}
        </FetchMore>
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
