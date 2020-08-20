import withDynamicRendering from '@lib/page/withDynamicRendering'
import * as ArticleService from '@modules/article/services'
export { default } from '@components/_page/_static/HomePage'

export async function getServerSideProps(context) {
  const enhancedFetchData = await withDynamicRendering()(fetchData)
  return enhancedFetchData(context)
}

async function fetchData() {
  const articleLatest = await ArticleService.getArticles({ limit: 10 })

  return {
    props: { articleLatest },
  }
}
