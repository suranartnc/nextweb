import React from 'react'

import withPage from '@lib/page/withPage'
import { getLatestArticles } from '@features/article/data/model'
import ArticleLatest from './ArticleLatest'

function HomePage({ articleLatest }) {
  return (
    <div>
      <ArticleLatest data={articleLatest} />
    </div>
  )
}

HomePage.getInitialProps = async () => {
  const articleLatest = await getLatestArticles()

  return {
    title: 'Home',
    articleLatest,
  }
}

export default withPage()(HomePage)
