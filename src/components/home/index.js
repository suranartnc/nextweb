import React from 'react'
import Helmet from 'react-helmet'

import withPage from '@lib/page/withPage'
import { getLatestArticles } from '@features/article/data/model'
import ArticleLatest from './ArticleLatest'

function HomePage({ articleLatest }) {
  return (
    <div>
      <Helmet title="Home" />
      <ArticleLatest initialValue={articleLatest} />
    </div>
  )
}

HomePage.getInitialProps = async () => {
  const articleLatest = await getLatestArticles()

  return {
    articleLatest,
  }
}

export default withPage()(HomePage)
