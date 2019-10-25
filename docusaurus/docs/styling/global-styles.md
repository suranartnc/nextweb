---
id: global-styles
title: Global Styles
---

You can put styles that every pages use in the following file:

```javascript
// src/lib/styles/GlobalStyles.js

import { css, Global } from '@emotion/core'
import normalize from './normalize'
import reset from './reset'

// Define styles for the whole app here...
const baseStyles = css`
  ${normalize}
  ${reset}
  html,
  body {
    padding: 3rem 1rem;
    margin: 0;
    background: papayawhip;
    min-height: 100%;
    font-family: 'Open Sans', sans-serif;
    font-size: 24px;
  }
  img {
    width: 100%;
    max-width: 100%;
    height: auto;
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