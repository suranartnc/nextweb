---
id: error-handling
title: Error Handling
---

Error handling in react application is never easy, that is not true in **NextWeb.js**.

## Page-Level Errors

This type of error is caused by some code that called by ```getInitialProps()```. If this error type occurred, the handler will render the error page automatically.

Cause of Error | Error Page Status Code
- | -
Source Code | 500 
API | From HTTP Status

### Custom Error Page

**NextWeb.js** provides error pages with very simple styles. We know that you want to modify them so here are the files:

```bash
src/
  components/
    error/
      400/
        index.js
      500/
        index.js
````

## Component-Level Errors

This type of error is caused by ```Fetch``` render prop. If this error type occurred, the handler will render nothing unless you handle it manually using the ```onError``` prop.