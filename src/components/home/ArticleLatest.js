import React from 'react'
import { get } from 'lodash'
import { useAsync } from 'react-async'
import { fetchAPI } from '@lib/api'

// Mock Data
ArticleLatest.defaultProps = {
  data: [
    {
      id: 1,
      title: 'Article 1',
      excerpt: 'Excerpt 1',
    },
    {
      id: 2,
      title: 'Article 2',
      excerpt: 'Excerpt 2',
    },
    {
      id: 3,
      title: 'Article 3',
      excerpt: 'Excerpt 3',
    },
  ],
}

const loadArticles = () =>
  fetchAPI({ path: '/articles' }).then(({ data }) => data)

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
