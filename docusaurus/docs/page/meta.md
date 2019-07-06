---
id: meta
title: Meta
---

Let's say we have a page that fetchs data from an API:

```javascript
import withPage from '@lib/page/withPage'
import * as ArticleService from '@features/article/data/services'

function ArticleDetailPage({ articleDetail }) {
  ...
}

ArticleDetailPage.getInitialProps = async ({ asPath, query }) => {
  const articleDetail = await ArticleService.getArticleDetail({ id: query.id })

  return {
    articleDetail
  }
}

export default withPage()(ArticleDetailPage)
```

To add title and meta tags, just add some properties to the returning object from ```getInitialProps()```.

```javascript
import withPage from '@lib/page/withPage'
import * as ArticleService from '@features/article/data/services'

function ArticleDetailPage({ articleDetail }) {
  ...
}

ArticleDetailPage.getInitialProps = async ({ asPath, query }) => {
  const articleDetail = await ArticleService.getArticleDetail({ id: query.id })

  return {
    articleDetail,

    // Add title and meta tags here...
    title: articleDetail.title,
    meta: {
      description: articleDetail.excerpt,
      keywords: articleDetail.tags.join(', ')
    },
  }
}

export default withPage()(ArticleDetailPage)
```
