import React from 'react'
import Link from '@link'

export default function RelatedArticles({ data }) {
  return (
    <section>
      <h2>Popular</h2>
      <ArticleList data={data} />
    </section>
  )
}

function ArticleList({ data }) {
  return (
    <div className="flex flex-col">
      {data.map((article, index) => (
        <ArticleItem key={article.id} data={article} index={`0${index + 1} `} />
      ))}
    </div>
  )
}

function ArticleItem({ data, index }) {
  return (
    <div className="w-full py-4">
      <div className="flex">
        <div className="w-12">
          <span className="text-gray-500 text-2xl">{index}</span>
        </div>
        <div className="flex-1">
          <article>
            <h3 className="text-xl">
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
      </div>
    </div>
  )
}
