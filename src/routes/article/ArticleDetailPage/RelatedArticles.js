import React from 'react'
import Link from '@link'

export default function RelatedArticles({ data }) {
  return (
    <section className="my-40 mx-0">
      <h2>More</h2>
      <ArticleList data={data} />
    </section>
  )
}

function ArticleList({ data }) {
  return (
    <div className="flex my-0 -mx-8">
      {data.map(article => (
        <ArticleItem key={article.id} data={article} />
      ))}
    </div>
  )
}

function ArticleItem({ data }) {
  return (
    <div className="w-1/3 px-8">
      <article>
        <Link route="article-detail" params={{ id: data.id }}>
          <a>
            <img src={data.image.featured} />
          </a>
        </Link>
        <h3>
          <Link route="article-detail" params={{ id: data.id }}>
            <a>{data.title}</a>
          </Link>
        </h3>
        <div
          className="text-gray-600"
          dangerouslySetInnerHTML={{ __html: data.excerpt }}
        />
      </article>
    </div>
  )
}
