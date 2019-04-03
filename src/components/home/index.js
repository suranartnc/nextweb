import React from 'react'
import Helmet from 'react-helmet'

import { loadArticles } from '@features/article/model'
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

  const articleLatest = await loadArticles()

  return {
    articleLatest,
  }
}
