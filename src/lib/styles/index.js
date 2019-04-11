import './sass/app.scss'

import React from 'react'
import { css, Global } from '@emotion/core'

const baseStyles = css`
  html,
  body {
    padding: 3rem 1rem;
    margin: 0;
    background: papayawhip;
    min-height: 100%;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 24px;
  }
`

export function GlobalStyles() {
  return (
    <React.Fragment>
      <Global styles={baseStyles} />
    </React.Fragment>
  )
}
