import React from 'react'

function ArticleDetail({ data }) {
  return (
    <article>
      <img src={data.image.featured} className="mt-8 mb-4 mx-0" />
      <h1>{data.title}</h1>
      <div
        className="text-xl"
        dangerouslySetInnerHTML={{ __html: data.body }}
      />
    </article>
  )
}

export default ArticleDetail
