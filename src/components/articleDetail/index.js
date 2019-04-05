import React from 'react'

import withPage from '@lib/page/withPage'
import { Fetch } from '@lib/api'

import {
  getArticleDetail,
  getLatestArticles,
} from '@features/article/data/model'

import ArticleDetail from './ArticleDetail'
import ArticleLatest from '../home/ArticleLatest'

function ArticleDetailPage({ articleDetail }) {
  return (
    <div>
      <ArticleDetail data={articleDetail} />

      <Fetch api={getLatestArticles}>
        {({ data }) => <ArticleLatest data={data} />}
      </Fetch>
    </div>
  )
}

ArticleDetailPage.getInitialProps = async ({ asPath, query }) => {
  const articleDetail = await getArticleDetail({ id: query.id })

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
    articleDetail,
  }
}

export default withPage()(ArticleDetailPage)
