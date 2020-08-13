import HomePage from '@components/_page/_static/HomePage'
import * as ArticleService from '@features/article/services'

export default HomePage

export async function getServerSideProps() {
  const articleLatest = await ArticleService.getArticles({ limit: 10 })

  return {
    props: { title: 'Home', articleLatest },
  }
}
