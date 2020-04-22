import React, { Fragment } from 'react'

import { Fetch, FetchMore } from '@lib/api'
import withPage from '@lib/page/withPage'
import * as ArticleService from '@features/article/services'

import PopularArticles from '@routes/article/ArticleDetailPage/PopularArticles'

import ArticleLatest, { ArticleList } from './ArticleLatest'

function HomePage({ articleLatest }) {
  return (
    <div className="flex">
      <div className="w-2/3 pr-5">
        <ArticleLatest data={articleLatest} />

        <FetchMore
          service={({ start, limit }) =>
            ArticleService.getArticles({ start, limit })
          }
          start={5}
          limit={5}>
          {({ data, fetchMore, isLoading, isDone }) => {
            return (
              <Fragment>
                <ArticleList data={data} />

                {!isDone && (
                  <div className="text-center">
                    <button
                      onClick={fetchMore}
                      className="w-full py-2 border border-gray-300 rounded-sm text-gray-600">
                      {isLoading ? 'Loading...' : 'Load More'}
                    </button>
                  </div>
                )}
              </Fragment>
            )
          }}
        </FetchMore>
      </div>

      <div className="w-1/3 pl-5">
        <Fetch service={() => ArticleService.getArticles({ limit: 5 })}>
          {({ data }) => <PopularArticles data={data} />}
        </Fetch>
      </div>
    </div>
  )
}

HomePage.getInitialProps = async () => {
  const articleLatest = await ArticleService.getArticles({ limit: 10 })

  return {
    title: 'Home',
    articleLatest,
  }
}

export default withPage()(HomePage)
