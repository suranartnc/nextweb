import React from 'react'

import { getArticleDetail } from '@features/article/data/model'
import withPage from '@lib/page/withPage'
import ArticleDetail from './ArticleDetail'

function ArticleDetailPage({ articleDetail }) {
  return (
    <div>
      <ArticleDetail initialValue={articleDetail} />
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
