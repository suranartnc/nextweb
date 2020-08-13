import ArticleDetailPage from '@routes/article/ArticleDetailPage'
import * as ArticleService from '@features/article/services'

export async function getServerSideProps({ query }) {
  const articleDetail = await ArticleService.getArticleById(query.id)

  return {
    props: {
      title: articleDetail.title,
      meta: {
        description: articleDetail.excerpt,
        keywords: articleDetail.tags.join(', '),
        'og:title': articleDetail.title,
        'og:description': articleDetail.excerpt,
      },
      stats: {
        gtm: {
          customDimensions: {
            customDM1: articleDetail.author.name,
            customDM2: articleDetail.pubDate,
          },
        },
      },
      breadcrumb: [
        {
          label: articleDetail.title,
          route: {
            name: 'article-detail',
            params: {
              id: articleDetail.id,
            },
          },
        },
      ],
      articleDetail,
    },
  }
}

export default ArticleDetailPage
