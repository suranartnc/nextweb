import React from 'react'
import Helmet from 'react-helmet'

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
      <Helmet title={articleDetail.title} />
      <ArticleDetail data={articleDetail} />

      <Fetch api={getLatestArticles}>
        {({ data }) => <ArticleLatest data={data} />}
      </Fetch>
    </div>
  )
}

ArticleDetailPage.getInitialProps = async ({ query }) => {
  const articleDetail = await getArticleDetail({ id: query.id })

  return {
    articleDetail,
  }
}

export default withPage()(ArticleDetailPage)
