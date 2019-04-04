import React from 'react'
// import Helmet from 'react-helmet'

import withPage from '@lib/page/withPage'
import ArticleDetail from './ArticleDetail'

function ArticleDetailPage() {
  return (
    <div>
      {/* <Helmet title="Home" /> */}
      <ArticleDetail />
    </div>
  )
}

ArticleDetailPage.getInitialProps = async () => {
  // const articleLatest = await getLatestArticles()

  return {
    // articleLatest,
  }
}

export default withPage()(ArticleDetailPage)
