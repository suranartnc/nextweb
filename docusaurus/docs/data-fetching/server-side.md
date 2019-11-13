---
id: server-side
title: Server-Side Fetching
---

When you want to fetch some data, you have to communicate with API via services. For server-side, just call the service inside ```getInitialProps()``` of a page-level component.

## Page Component

```javascript
import * as ArticleService from '@features/article/services'

function ArticleDetailPage({ data }) {
  return (
    <div>
      <ArticleDetail data={data} />
    </div>
  )
}

ArticleDetailPage.getInitialProps = async ({ query }) => {
  const data = await ArticleService.getArticleById(query.id)

  return { data }
}
```

## UI Component

```javascript
function ArticleDetail({ data }) {
  return (
    <article>
      <h1>{data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.body }} />
    </article>
  )
}
```
