import React from 'react'

import withPage from '@lib/page/withPage'
import { Fetch } from '@lib/api'

import * as ArticleService from '@features/article/services'

import ArticleContent from './ArticleContent'
import PopularArticles from './PopularArticles'
import RelatedArticles from './RelatedArticles'

function ArticleDetailPage({ articleDetail }) {
  return (
    <div className="flex flex-col">
      <div className="w-full">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-2/3 pr-0 lg:pr-8">
            <ArticleContent data={articleDetail} />
          </div>

          <div className="w-full lg:w-1/3 pl-0 lg:pl-8">
            <Fetch service={() => ArticleService.getArticles({ limit: 5 })}>
              {({ data }) => <PopularArticles data={data} />}
            </Fetch>
          </div>
        </div>
      </div>

      <div className="w-full">
        <Fetch service={() => ArticleService.getArticles({ limit: 3 })}>
          {({ data }) => <RelatedArticles data={data} />}
        </Fetch>
      </div>
    </div>
  )
}

ArticleDetailPage.getInitialProps = async ({ asPath, query }) => {
  const articleDetail = await ArticleService.getArticleById(query.id)

  return {
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
  }
}

export default withPage()(ArticleDetailPage)
