import React from 'react'

import { Link } from '@router'

export default function ArticleLatest({ data }) {
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
      <h3>
        <Link to="articleDetail" params={{ id: data.id }}>
          <a>{data.title}</a>
        </Link>
      </h3>
      <div dangerouslySetInnerHTML={{ __html: data.excerpt }} />
    </article>
  )
}
