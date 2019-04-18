import React, { Fragment, useState } from 'react'
import { Flex, Box } from '@rebass/grid/emotion'

import withPage from '@lib/page/withPage'
import { getLatestArticles, getArticles } from '@features/article/data/model'
import ArticleLatest, { ArticleList } from './ArticleLatest'

function FetchMore({ children, api, start, limit }) {
  const [lastStart, setLastStart] = useState(start)
  const [isLoading, setIsLoading] = useState(false)
  const [isDone, setIsDone] = useState(false)
  const [data, setData] = useState([])

  const fetchMore = async () => {
    setIsLoading(true)
    const newData = await api({ start: lastStart, limit })
    setIsLoading(false)
    setLastStart(lastStart + newData.length)
    setData(data.concat(newData))

    if (newData.length < limit) {
      setIsDone(true)
    }
  }

  return children({ data, fetchMore, isLoading, isDone })
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
          {({ data, fetchMore, isLoading, isDone }) => {
            return (
              <Fragment>
                <ArticleList data={data} />

                {!isDone && (
                  <button onClick={fetchMore}>
                    {isLoading ? 'Loading...' : 'Load More'}
                  </button>
                )}
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
