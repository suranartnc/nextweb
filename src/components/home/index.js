import React from 'react'
import Helmet from 'react-helmet'

import { fetchAPI } from '@lib/api'
import ArticleLatest from './ArticleLatest'

export default function HomePage({ data }) {
  return (
    <div>
      <Helmet title="Home" />
      <ArticleLatest data={data} />
    </div>
  )
}

HomePage.getInitialProps = async () => {
  const rersult = await fetchAPI({ path: '/articles' })
  return {
    data: rersult.data,
  }
}
