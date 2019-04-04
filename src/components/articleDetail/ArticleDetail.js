import React from 'react'

function ArticleDetail({ data }) {
  return (
    <article>
      <h1>{data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.body }} />
    </article>
  )
}

export default ArticleDetail
