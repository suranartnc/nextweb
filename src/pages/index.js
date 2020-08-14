import HomePage from '@components/_page/_static/HomePage'
import { withErrorHandling } from '@lib/error'
import * as ArticleService from '@features/article/services'

async function _getServerSideProps() {
  const articleLatest = await ArticleService.getArticles({ limit: 10 })

  return {
    props: { articleLatest },
  }
}

export async function getServerSideProps(context) {
  const getPropsWithErrorHandling = await withErrorHandling(_getServerSideProps)
  return getPropsWithErrorHandling(context)
}

export default HomePage
