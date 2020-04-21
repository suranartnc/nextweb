import React from 'react'

function ArticleDetail({ data }) {
  return (
    <article>
      <img src={data.image.featured} css={{ margin: '20px 0 10px' }} />
      <h1>{data.title}</h1>
      <div
        css={{ fontSize: '22px' }}
        dangerouslySetInnerHTML={{ __html: data.body }}
      />
    </article>
  )
}

export default ArticleDetail
