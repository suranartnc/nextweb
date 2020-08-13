import HomePage from '@components/_page/_static/HomePage'
import { withErrorHandling } from '@lib/error'

import * as ArticleService from '@features/article/services'

export default HomePage

async function _getServerSideProps(context) {
  const articleLatest = await ArticleService.getArticles({ limit: 10 })

  return {
    props: { title: 'Home', articleLatest },
  }
}

export const getServerSideProps = async function(context) {
  const getServerSidePropsWithErrorHandling = await withErrorHandling(
    _getServerSideProps,
  )
  return getServerSidePropsWithErrorHandling(context)
}
