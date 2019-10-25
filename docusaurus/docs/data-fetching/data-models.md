---
id: data-models
title: Repositories & Services
---

To make an app maintainable, all business logics should be grouped by feature. 

```bash
src/
  features/
    feature1/
    feature2/
    feature3/
````

For data fetching, we suggest to separate the data layer into 2 parts, repository and service.

```bash
src/
  features/
    feature1/
      repository.js
      services.js
    feature2/
      repository.js
      services.js
    ...
````

### Repository Layer

The repository represents the data access layer. You should have naming conventions for function name and you can modify some parameters to make them easier to use.

```javascript
// src/features/article/repository.js

import { fetchAPI } from '@lib/api'

export function getArticles({ q, start, limit }) {
  return fetchAPI({
    path: '/articles',
    params: { q, _start: start, _limit: limit },
  })
}

export function getArticleById(id) {
  return fetchAPI({
    path: `/articles/${id}`,
  })
}
```

### Service Layer

The service just represents business logics. It is a collection of functions that components use to communicate with the repository. Please note that the service grows when business logic grows while the repository grows when the API has some new capabilities. 

```javascript
// src/features/article/services.js

import * as Repository from './repository'

export function getArticles({ keyword, start = 0, limit = 5 } = {}) {
  return API.getArticles({ q: keyword, start, limit })
}

export function getArticleById(id) {
  return API.getArticleById(id)
}

```

At first, you may not see the different between repository and service layer. But when your application grows, the service layer will become more complex. You can add data preparation in service to make your component very simple.

