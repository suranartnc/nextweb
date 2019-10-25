---
id: error-handling
title: Error Handling
---

**NextWeb.js** comes with a very smart error handler out of the box. Actually, you can do nothing unless add some styles to your error pages to make them look awesome.

## Page-Level Errors

This type of error is caused by some code that called by ```getInitialProps()```. If this error type occurred, the handler will render the error page automatically.

Cause of Error | Error Page Status Code
- | -
Source Code | 500 
API | Depend on API response

### Custom Error Page

**NextWeb.js** provides error pages with very simple styles. We know that you want to modify them so here are the files:

```bash
src/
  components/
    _error/
      400/
        index.js
      500/
        index.js
````

## Component-Level Errors

This type of error is caused by ```<Fetch />``` render prop. If this error type occurred, the handler will render nothing unless you handle it manually using the ```onError``` prop.

```javascript
function ArticleDetailPage({ data }) {
  return (
    <div>
        <ArticleDetail data={data} />

        <Fetch
          service={getLatestArticles}
          onError={error => {
            console.error(error)
            return <MyErrorMessage error={error} />
          }}>
          {({ data }) => <ArticleLatest data={data} />}
        </Fetch>
    </div>
  )
}
```
