---
id: navigate-between-pages
title: Navigate Between Pages
---

## Create New Route

We disable file-system route and use the [```next-routes```](https://github.com/fridays/next-routes) package instead. It allows you to refer to a route using a route name which very useful to maintain a large-scale web app.


```javascript
// src/router/routes/_main.js

const routes = [
  {
    pattern: '/',
    name: 'home',
    page: 'index',
  },

  {
    pattern: '/mypage',   // you can access this page by entering www.mydomain.com/mypage
    name: 'mypage',       // use this name to refer to this route
    page: 'mypage',       // path of the file (relative to page directory)
  },

  {
    pattern: '/article/:id',  // For dynamic pages, use ":" to make it a variable
    name: 'article-detail',
    page: 'article-detail',
  },

  ...
]

module.exports = routes

```

Basically, the value of name and page should be the same because it is easy to remember but this is not required.

## Add Link to a Page

Just pass a route name to ```<Link />``` via ```to``` prop

```javascript
import Link from '@link'

function MyNavigation() {
  return (
    <div>
      <Link route="home">
        <a>Home</a>
      </Link>

      <Link route="mypage">
        <a>My Page</a>
      </Link>

      <Link route="article-detail" params={{ id: 1234 }}>
        <a>Article ID: 1234</a>
      </Link>
    </div>
  )
}

```
As you can see, you can pass parameters to a dynamic route using ```params``` prop.
