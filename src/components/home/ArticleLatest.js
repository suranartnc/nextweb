import React from 'react'

import { Fetch } from '@lib/api'
import { getLatestArticles } from '@features/article/data/model'

export default function ArticleLatest({ initialValue }) {
  return (
    <Fetch api={getLatestArticles} initialValue={initialValue}>
      {({ data }) => (
        <section>
          <h2>Latest Articles</h2>
          <ArticleList data={data} />
        </section>
      )}
    </Fetch>
  )
}

function ArticleList({ data }) {
  return (
    <div>
      {data.map(article => (
        <ArticleItem key={article.id} data={article} />
      ))}
    </div>
  )
}

function ArticleItem({ data }) {
  return (
    <article>
      <h3>{data.title}</h3>
      <div dangerouslySetInnerHTML={{ __html: data.excerpt }} />
    </article>
  )
}
