import HomePage from '@components/_page/_static/HomePage'
import withDynamicRendering from '@lib/page/withDynamicRendering'
import * as ArticleService from '@features/article/services'

async function _getServerSideProps() {
  const articleLatest = await ArticleService.getArticles({ limit: 10 })

  return {
    props: { articleLatest },
  }
}

export async function getServerSideProps(context) {
  const getPropsWithErrorHandling = await withDynamicRendering()(
    _getServerSideProps,
  )
  return getPropsWithErrorHandling(context)
}

export default HomePage
