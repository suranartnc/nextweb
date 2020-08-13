import React, { Fragment } from 'react'
import { Flex, Box } from '@grid'

import { Fetch, FetchMore } from '@lib/api'
import * as ArticleService from '@features/article/services'
import colors from '@features/_ui/config/colors'

import Page from '@components/_common/Page'
import PopularArticles from '@components/_page/article/ArticleDetailPage/PopularArticles'
import ArticleLatest, { ArticleList } from './ArticleLatest'

function HomePage({ articleLatest }) {
  return (
    <Page>
      <Flex>
        <Box width={[1, 2 / 3]} pr={[0, 20]}>
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
                    <div css={{ textAlign: 'center' }}>
                      <button
                        onClick={fetchMore}
                        css={{
                          width: '100%',
                          padding: '10px 20px',
                          border: `1px solid ${colors.background.darkGray}`,
                          borderRadius: '5px',
                          color: colors.text.light,
                        }}>
                        {isLoading ? 'Loading...' : 'Load More'}
                      </button>
                    </div>
                  )}
                </Fragment>
              )
            }}
          </FetchMore>
        </Box>

        <Box width={[1, 1 / 3]} pl={[0, 20]}>
          <Fetch service={() => ArticleService.getArticles({ limit: 5 })}>
            {({ data }) => <PopularArticles data={data} />}
          </Fetch>
        </Box>
      </Flex>
    </Page>
  )
}

export default HomePage
