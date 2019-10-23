import React from 'react'
import Link from '@link'

export default function ArticleLatest({ data }) {
  return (
    <section>
      <h2>Latest Articles</h2>
      <ArticleList data={data} />
    </section>
  )
}

export function ArticleList({ data }) {
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
        <Link route="article-detail" params={{ id: data.id }}>
          <a>{data.title}</a>
        </Link>
      </h3>
      <div dangerouslySetInnerHTML={{ __html: data.excerpt }} />
    </article>
  )
}
