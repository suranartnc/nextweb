import React from 'react'
import { Global } from '@emotion/core'

import baseStyles from './base'

export default function BaseStyles() {
  return (
    <React.Fragment>
      <Global styles={baseStyles} />
    </React.Fragment>
  )
}
