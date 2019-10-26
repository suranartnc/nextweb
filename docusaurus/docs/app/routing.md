---
id: routing
title: Routing
---

## Route Structure

The folder structure of ```src/router/``` looks like this:

```bash
src/
  router/
    routes/       # Route Groups
      _main.js
      groupA.js
      groupB.js
      groupC.js
      ...
    index.js      # Route Register
````

As you can see, the router are consisted of groups of routes and the file that used to register those routes to the app.

```
// src/router/index.js

const nextRoutes = require('next-routes')
const routes = nextRoutes()

// Import route groups
const main = require('./routes/_main')
const groupA = require('./routes/groupA')
const groupB = require('./routes/_groupB')
const groupC = require('./routes/_groupC')

// Combine each route group together
const allRoutes = [
  ...main,
  ...groupA,
  ...groupB,
  ...groupC
]

allRoutes.forEach(function({ name, pattern, page }) {
  routes.add(name, pattern, page)
})

module.exports = routes
```

## Route Design

### Multiple Group
If your app are quite large, multiple route group is prefer.

```javascript
// src/router/routes/_main.js

const routes = [
  {
    pattern: '/',
    name: 'home',
    page: 'index',
  },
  {
    pattern: '/about',
    name: 'about',
    page: 'about',
  },

  ...
]

module.exports = routes
```

```javascript
// src/router/routes/article.js

const routes = [
  {
    pattern: '/articles',
    name: 'article-list',
    page: 'article-list',
  },
  {
    pattern: '/article/:id',
    name: 'article-detail',
    page: 'article-detail',
  },

  ...
]

module.exports = routes
```

You can separate route groups by your own rules, but what we recommended is separating by the prefix of patterns.

### Single Group

But if your app is simple, the single route group is more than OK.

```javascript
// src/router/routes/_main.js

const routes = [
  {
    pattern: '/',
    name: 'home',
    page: 'index',
  },
  {
    pattern: '/article/:id',
    name: 'article-detail',
    page: 'article-detail',
  },
  {
    pattern: '/about',
    name: 'about',
    page: 'about',
  },
  {
    pattern: '/login',
    name: 'login',
    page: 'login',
  },
  {
    pattern: '/account',
    name: 'account',
    page: 'account',
  },
]

module.exports = routes
```

***Note:*** *Do not forget that the router will match only the first route pattern that meet the condition. If your routes are not so many, you can still manage all patterns efficiently. But if your app grows and becomes a very complex one, refactoring to a multiple group design is a better choice.*


