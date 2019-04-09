import React from 'react'
import { css, Global } from '@emotion/core'

import './sass/app.scss'

export default function GlobalStyles() {
  return (
    <React.Fragment>
      <Global
        styles={css`
          html,
          body {
            padding: 3rem 1rem;
            margin: 0;
            background: papayawhip;
            min-height: 100%;
            font-family: Helvetica, Arial, sans-serif;
            font-size: 24px;
          }
        `}
      />
    </React.Fragment>
  )
}
