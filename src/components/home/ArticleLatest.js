import React from 'react'
import { get } from 'lodash'
import { useAsync } from 'react-async'

import { loadArticles } from '@features/article/model'

export default function ArticleLatest({ initialValue }) {
  const { data, error, isLoading } = useAsync({
    promiseFn: loadArticles,
    initialValue,
  })
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
