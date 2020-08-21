import React from 'react'
import { useTheme } from 'emotion-theming'
import Link from '@link'
import { Flex, Box } from '@grid'

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
    <Flex>
      {data.map((article, index) => (
        <ArticleItem key={article.id} data={article} index={`0${index + 1} `} />
      ))}
    </Flex>
  )
}

function ArticleItem({ data, index }) {
  const { variables } = useTheme()

  return (
    <Box width={1} py={10}>
      <Flex>
        <Box css={{ width: '50px' }}>
          <span
            css={{
              color: variables.colors.background.secondary,
              fontSize: '28px',
            }}>
            {index}
          </span>
        </Box>
        <Box css={{ flex: 1 }}>
          <article>
            <h3 css={{ fontSize: '18px' }}>
              <Link pathname="/article/[id]" query={{ id: data.id }}>
                <a>{data.title}</a>
              </Link>
            </h3>
            <div
              css={{ color: variables.colors.text.secondary }}
              dangerouslySetInnerHTML={{ __html: data.excerpt }}
            />
          </article>
        </Box>
      </Flex>
    </Box>
  )
}
