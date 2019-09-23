---
id: breadcrumb
title: Breadcrumb
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

To define the breadcrumb, just add the ```breadcrumb``` property to the returning object from ```getInitialProps()```.

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

    // Define the breadcrumb here...
    breadcrumb: [
      {
        label: articleDetail.title,
        route: {
          name: 'articleDetail',
          params: {
            id: articleDetail.id,
          },
        },
      },
    ],
  }
}

export default withPage()(ArticleDetailPage)
```

Please note that the value of the ```breadcrumb``` property is an array and this data will be passed to ```<Breadcrumb />``` in the main layout.

```javascript
// src/components/_layouts/main/Breadcrumb.js

import { Link } from '@router'

export default function Breadcrumb({ data = [] }) {
  return (
    <nav>
      <Link key="Home" route="home">
        <a>Home</a>
      </Link>

      {data.map(({ label, route }) => (
        <Fragment key={label}>
          <span>&gt;</span>
          <Link route={route.name} params={route.params}>
            <a>{label}</a>
          </Link>
        </Fragment>
      ))}
    </nav>
  )
}
```
