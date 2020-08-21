import React from 'react'
import { useTheme } from 'emotion-theming'
import Link from '@link'
import { Flex, Box } from '@grid'

export default function RelatedArticles({ data }) {
  return (
    <section css={{ margin: '100px 0' }}>
      <h2>More</h2>
      <ArticleList data={data} />
    </section>
  )
}

function ArticleList({ data }) {
  return (
    <Flex css={{ margin: '0 -20px' }}>
      {data.map(article => (
        <ArticleItem key={article.id} data={article} />
      ))}
    </Flex>
  )
}

function ArticleItem({ data }) {
  const { variables } = useTheme()

  return (
    <Box width={1 / 3} px={20}>
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
          css={{ color: variables.colors.text.secondary }}
          dangerouslySetInnerHTML={{ __html: data.excerpt }}
        />
      </article>
    </Box>
  )
}
