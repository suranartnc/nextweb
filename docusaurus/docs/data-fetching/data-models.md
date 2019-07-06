---
id: data-models
title: Repositories & Services
---

## Feature-Based Design

To make an app maintainable, all business logics should be grouped by feature. 

```bash
src/
  features/
    feature1/
    feature2/
    feature3/
````

If a feature has some data, we suggest to separate data layer into 2 parts, repository and service.

```bash
src/
  features/
    feature1/
      data/
        repository.js
        services.js
    ...
````

### Repository

The repository represents the data access layer. You should have naming conventions for function name and you can modify some parameters to make them easier to use.

```javascript
// src/features/article/data/repository.js

import { fetchAPI } from '@lib/api'

export function getArticles({ q, start, limit }) {
  return fetchAPI({
    path: '/articles',
    params: { q, _start: start, _limit: limit },
  })
}

export function getArticle({ id }) {
  return fetchAPI({
    path: `/articles/${id}`,
  })
}
```

### Services

The service just represents business logics. It is a collection of functions that communicate with the repository. Please note that the service grows when business logic grows while the repository grows when the API has some new capabilities. 

```javascript
// src/features/article/data/services.js

import * as Repository from './repository'

export function getArticles({ start = 0, limit = 5 } = {}) {
  return Repository.getArticles({ start, limit })
}

export function getArticleDetail({ id }) {
  return Repository.getArticle({ id })
}

```

