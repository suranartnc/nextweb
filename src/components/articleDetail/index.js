import React from 'react'
import Helmet from 'react-helmet'

import { getArticleDetail } from '@features/article/data/model'
import withPage from '@lib/page/withPage'
import ArticleDetail from './ArticleDetail'

function ArticleDetailPage({ articleDetail }) {
  return (
    <div>
      <Helmet title={articleDetail.title} />
      <ArticleDetail data={articleDetail} />
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
