import React from 'react'
import Link from '@link'
import { Flex, Box } from '@grid'
import colors from '@features/_ui/config/colors'

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
    <article css={{ padding: '20px 0' }}>
      <Flex>
        <Box width={6.5 / 10}>
          <h3>
            <Link route="article-detail" params={{ id: data.id }}>
              <a>{data.title}</a>
            </Link>
          </h3>
          <div
            css={{ color: colors.text.light }}
            dangerouslySetInnerHTML={{ __html: data.excerpt }}
          />
        </Box>
        <Box width={3.5 / 10} pl={20} pt={10}>
          <Link route="article-detail" params={{ id: data.id }}>
            <a>
              <img src={data.image.featured} />
            </a>
          </Link>
        </Box>
      </Flex>
    </article>
  )
}
