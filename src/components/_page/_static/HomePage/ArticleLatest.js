import { useTheme } from 'emotion-theming'
import Link from '@link'
import { Flex, Box } from '@grid'

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
  const { variables } = useTheme()

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
            css={{ color: variables.colors.text.secondary }}
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
