import React from 'react'
import { Flex, Box } from '@grid'

import { Fetch } from '@lib/api'
import * as ArticleService from '@features/article/services'

import Page from '@components/_common/Page'
import ArticleContent from './ArticleContent'
import PopularArticles from './PopularArticles'
import RelatedArticles from './RelatedArticles'

import * as metaConfig from './meta'

export default function ArticleDetailPage({ articleDetail }) {
  return (
    <Page data={articleDetail} metaConfig={metaConfig}>
      <Flex>
        <Box width={1}>
          <Flex>
            <Box width={[1, 2 / 3]} pr={[0, 20]}>
              <ArticleContent data={articleDetail} />
            </Box>

            <Box width={[1, 1 / 3]} pl={[0, 20]}>
              <Fetch service={() => ArticleService.getArticles({ limit: 5 })}>
                {({ data }) => <PopularArticles data={data} />}
              </Fetch>
            </Box>
          </Flex>
        </Box>

        <Box width={1}>
          <Fetch service={() => ArticleService.getArticles({ limit: 3 })}>
            {({ data }) => <RelatedArticles data={data} />}
          </Fetch>
        </Box>
      </Flex>
    </Page>
  )
}
