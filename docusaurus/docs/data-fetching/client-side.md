---
id: client-side
title: Client-Side Fetching
---

## Fetch Component

Name | Description
- | -
api | A function that returns a promise
onError | A callback function to handle an error
preloader | React Component / Element to render while loading

## Page Component

```javascript
import { Fetch } from '@lib/api'

import { getArticles } from '@features/article/data/model'

function ArticleDetailPage({ articleDetail }) {
  return (
    <div>
      <Fetch api={() => getArticles({ limit: 10 }))}>
        {({ data }) => <ArticleLatest data={data} />}
      </Fetch>
    </div>
  )
}
```

## UI Component

```javascript
function ArticleLatest({ data }) {
  return (
    <section>
      <h2>Latest Articles</h2>
      <div>
        {data.map(article => (
          <article key={article.id}>
            <h3>
              <Link to="articleDetail" params={{ id: data.id }}>
                <a>{data.title}</a>
              </Link>
            </h3>
            <div dangerouslySetInnerHTML={{ __html: data.excerpt }} />
          </article>
        ))}
      </div>
    </section>
  )
}
```
