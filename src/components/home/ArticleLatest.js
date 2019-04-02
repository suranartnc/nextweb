import React from 'react'

ArticleList.defaultProps = {
  data: [
    {
      title: 'Article 1',
      excerpt: 'Excerpt 1',
    },
    {
      title: 'Article 2',
      excerpt: 'Excerpt 2',
    },
    {
      title: 'Article 3',
      excerpt: 'Excerpt 3',
    },
  ],
}

export default function ArticleLatest() {
  return (
    <section>
      <h2>Latest Articles</h2>
      <ArticleList />
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
