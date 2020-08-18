import React from 'react'
import { useTheme } from 'emotion-theming'

function ArticleDetail({ data }) {
  const { variables } = useTheme()

  return (
    <article>
      <img src={data.image.featured} css={{ margin: '20px 0 10px' }} />
      <h1 css={{ fontSize: '42px', color: variables.colors.link }}>
        {data.title}
      </h1>
      <div
        css={{ padding: '20px 0', fontSize: '22px' }}
        dangerouslySetInnerHTML={{ __html: data.body }}
      />
    </article>
  )
}

export default ArticleDetail
