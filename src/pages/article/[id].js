import withDynamicRendering from '@lib/page/withDynamicRendering'
import * as ArticleService from '@modules/article/services'
export { default } from '@components/_page/article/ArticleDetailPage'

export async function getServerSideProps(context) {
  const enhancedFetchData = await withDynamicRendering()(fetchData)
  return enhancedFetchData(context)
}

async function fetchData({ query }) {
  const articleDetail = await ArticleService.getArticleById(query.id)

  return {
    props: { articleDetail },
  }
}
