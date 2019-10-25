import React from 'react'
import { Flex, Box } from '@grid'

import withPage from '@lib/page/withPage'
import { Fetch } from '@lib/api'

import * as ArticleService from '@features/article/services'

import ArticleContent from './ArticleContent'
import ArticleLatest from '../home/ArticleLatest'

function ArticleDetailPage({ articleDetail }) {
  return (
    <Flex flexWrap="wrap">
      <Box width={[1, 2 / 3]} pr={[0, 20]}>
        <ArticleContent data={articleDetail} />
      </Box>

      <Box width={[1, 1 / 3]} pl={[0, 20]}>
        <Fetch service={ArticleService.getLatestArticles}>
          {({ data }) => <ArticleLatest data={data} />}
        </Fetch>
      </Box>
    </Flex>
  )
}

ArticleDetailPage.getInitialProps = async ({ asPath, query }) => {
  const articleDetail = await ArticleService.getArticleById(query.id)

  return {
    title: articleDetail.title,
    meta: {
      description: articleDetail.excerpt,
      keywords: articleDetail.tags.join(', '),
      'og:title': articleDetail.title,
      'og:description': articleDetail.excerpt,
    },
    stats: {
      gtm: {
        customDimensions: {
          customDM1: articleDetail.author.name,
          customDM2: articleDetail.pubDate,
        },
      },
    },
    breadcrumb: [
      {
        label: articleDetail.title,
        route: {
          name: 'article-detail',
          params: {
            id: articleDetail.id,
          },
        },
      },
    ],
    articleDetail,
  }
}

export default withPage()(ArticleDetailPage)
