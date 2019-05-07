---
id: server-side
title: Server-Side Fetching
---

When you want to fetch some data, you have to communicate with the model layer. For server-side, just call the function from the data models inside ```getInitialProps()``` of a page-level component.

## Page Component

```javascript
import { getArticleDetail } from '@features/article/data/model'

function ArticleDetailPage({ articleDetail }) {
  return (
    <div>
      <ArticleDetail data={articleDetail} />
    </div>
  )
}

ArticleDetailPage.getInitialProps = async ({ asPath, query }) => {
  const articleDetail = await getArticleDetail({ id: query.id })

  return {
    articleDetail,
  }
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
