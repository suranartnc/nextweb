import React from 'react'
import Async from 'react-async'
import { get } from 'lodash'

import { getLatestArticles } from '@features/article/data/model'

function Fetch({
  children,
  api,
  initialValue,
  onError,
  preloader = 'Loading...',
}) {
  return (
    <Async promiseFn={api} initialValue={initialValue}>
      {({ data, error, isLoading }) => {
        if (isLoading) {
          return typeof preloader === 'function'
            ? React.createElement(preloader)
            : preloader
        }

        if (error) {
          return typeof onError === 'function' ? onError(error) : null
        }

        if (get(data, 'length', 0) === 0) {
          return null
        }

        return children({ data })
      }}
    </Async>
  )
}

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
