import React from 'react'
import Helmet from 'react-helmet'

import { fetchAPI } from '@lib/api'
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

  const articleLatestResult = await fetchAPI({ path: '/articles' })
  return {
    articleLatest: articleLatestResult.data,
  }
}
