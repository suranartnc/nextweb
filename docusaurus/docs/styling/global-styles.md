---
id: global-styles
title: Global Styles
---

Global styles mean the styles that every pages use.

```javascript
// src/lib/styles/GlobalStyles.js

import { css, Global } from '@emotion/core'

// Define styles for the whole app here...
const baseStyles = css`
  html,
  body {
    padding: 3rem 1rem;
    margin: 0;
    background: papayawhip;
    min-height: 100%;
    font-family: 'Open Sans', sans-serif;
    font-size: 24px;
  }
`

export default function GlobalStyles() {
  return (
    <React.Fragment>
      <Global styles={baseStyles} />
    </React.Fragment>
  )
}
```

Please note that if global styles grows, just move them to a new file or separate them into multiple files.