import React from 'react'
import { css, Global } from '@emotion/core'

import normalize from './normalize'
import grid from './grid'
import base from './base'

export function GlobalStyles() {
  return (
    <Global
      styles={css`
        ${normalize}
        ${grid}
        ${base}
      `}
    />
  )
}
