import React from 'react'
import Helmet from 'react-helmet'

import { getLatestArticles } from '@features/article/data/model'
import ArticleLatest from './ArticleLatest'

export default function HomePage({ articleLatest }) {
  return (
    <div>
      <Helmet title="Home" />
      <ArticleLatest initialValue={articleLatest} />
    </div>
  )
}

HomePage.getInitialProps = async () => {
  if (process.browser) {
    return {}
  }

  const articleLatest = await getLatestArticles()

  return {
    articleLatest,
  }
}
