import React, { Fragment } from 'react'
import { useTheme } from 'emotion-theming'
import { Flex, Box } from '@grid'

import { Page } from '@lib/page'
import { Fetch, FetchMore } from '@lib/api'
import * as ArticleService from '@modules/article/services'

import PopularArticles from '@components/_page/article/ArticleDetailPage/PopularArticles'
import ArticleLatest, { ArticleList } from './ArticleLatest'
import * as metaConfig from './meta'

export default function HomePage({ articleLatest }) {
  const { variables } = useTheme()

  return (
    <Page metaConfig={metaConfig}>
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
                          border: `1px solid ${variables.colors.background.secondary}`,
                          borderRadius: '5px',
                          color: variables.colors.text.secondary,
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
