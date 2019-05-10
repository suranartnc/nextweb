---
id: data-models
title: Data Models
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

If a feature has some data, we suggest to separate data layer into 2 parts, API and model.

```bash
src/
  features/
    feature1/
      data/
        api.js
        model.js
    ...
````

### API

The API layer represents all capabilities of the API. You should have naming conventions for function name and you can modify some parameters to make them easier to use.

```javascript
// src/features/article/data/api.js

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

### Models

The model layer just represents business logics. It is a collection of functions that communicate with the API layer. Please note that the model layer grows when business logic grows while the API layer grows when the API has some new capabilities. 

```javascript
// src/features/article/data/model.js

import * as API from './api'

export function getArticles({ start = 0, limit = 5 } = {}) {
  return API.getArticles({ start, limit })
}

export function getArticleDetail({ id }) {
  return API.getArticle({ id })
}

```

