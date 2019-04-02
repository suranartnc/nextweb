import React from 'react'
import { get } from 'lodash'

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

export default function ArticleLatest({ data }) {
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
