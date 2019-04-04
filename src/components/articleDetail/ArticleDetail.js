import React from 'react'
import { withRouter } from 'next/router'
import Helmet from 'react-helmet'

import { Fetch } from '@lib/api'
import { getArticleDetail } from '@features/article/data/model'

function ArticleDetail({ router, initialValue }) {
  return (
    <Fetch
      initialValue={initialValue}
      api={() => getArticleDetail({ id: router.query.id })}>
      {({ data }) => (
        <article>
          <Helmet title={data.title} />
          <h1>{data.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: data.body }} />
        </article>
      )}
    </Fetch>
  )
}

export default withRouter(ArticleDetail)
