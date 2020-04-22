import React from 'react'
import Link from '@link'

export default function ArticleLatest({ data }) {
  return (
    <section>
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
    <article className="py-8 px-0">
      <div className="flex">
        <div className="w-7/12">
          <h3>
            <Link route="article-detail" params={{ id: data.id }}>
              <a>{data.title}</a>
            </Link>
          </h3>
          <div
            className="text-gray-600"
            dangerouslySetInnerHTML={{ __html: data.excerpt }}
          />
        </div>
        <div className="w-5/12 pt-4 pl-8">
          <Link route="article-detail" params={{ id: data.id }}>
            <a>
              <img src={data.image.featured} />
            </a>
          </Link>
        </div>
      </div>
    </article>
  )
}
