import React from 'react'
import { withRouter } from 'next/router'
import { Fetch } from '@lib/api'
import { getArticleDetail } from '@features/article/data/model'

function ArticleDetail({ router }) {
  return (
    <Fetch api={() => getArticleDetail({ id: router.query.id })}>
      {({ data }) => (
        <article>
          <h1>{data.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: data.body }} />
        </article>
      )}
    </Fetch>
  )
}

export default withRouter(ArticleDetail)
