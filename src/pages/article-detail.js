import ArticleDetailPage from '@components/_page/article/ArticleDetailPage'
import withDynamicRendering from '@lib/page/withDynamicRendering'

import * as ArticleService from '@features/article/services'

export async function _getServerSideProps({ query }) {
  const articleDetail = await ArticleService.getArticleById(query.id)

  return {
    props: { articleDetail },
  }
}

export async function getServerSideProps(context) {
  const getPropsWithErrorHandling = await withDynamicRendering()(
    _getServerSideProps,
  )
  return getPropsWithErrorHandling(context)
}

export default ArticleDetailPage
