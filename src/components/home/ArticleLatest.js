import React from 'react'
import Async from 'react-async'
import { get } from 'lodash'

import { getLatestArticles } from '@features/article/data/model'

export default function ArticleLatest({ initialValue }) {
  return (
    <Async promiseFn={getLatestArticles} initialValue={initialValue}>
      {({ data, error, isLoading }) => {
        if (isLoading) return 'Loading...'
        if (error) return `Something went wrong: ${error.message}`

        if (get(data, 'length', 0) === 0) {
          return null
        }

        return (
          <section>
            <h2>Latest Articles</h2>
            <ArticleList data={data} />
          </section>
        )
      }}
    </Async>
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
