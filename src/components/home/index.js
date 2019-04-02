import React from 'react'
import Helmet from 'react-helmet'
import ArticleLatest from './ArticleLatest'

export default function HomePage() {
  return (
    <div>
      <Helmet title="Home" />
      <ArticleLatest />
    </div>
  )
}
