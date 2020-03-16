import React from 'react'
import Link from '@link'
import { Flex, Box } from '@grid'
import colors from '@features/_ui/config/colors'

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
          css={{ color: colors.text.light }}
          dangerouslySetInnerHTML={{ __html: data.excerpt }}
        />
      </article>
    </Box>
  )
}
