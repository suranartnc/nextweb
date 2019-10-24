import React, { Fragment } from 'react'
import { useUA } from '@lib/userAgent'

export const breakpoints = {
  md: '48em', // 768px
  lg: '60em', // 960px
  xl: '80em', // 1280px
}

export function media(bp = 'lg') {
  return `@media (min-width: ${breakpoints[bp]})`
}

export function Adaptive({ wide = null, narrow = null }) {
  const {
    device: { isMobile },
  } = useUA()

  return isMobile ? narrow : wide
}

export function Responsive({ breakpoint = 'md', wide = null, narrow = null }) {
  return (
    <Fragment>
      <div
        css={{
          display: 'block',
          [media(breakpoint)]: {
            display: 'none',
          },
        }}>
        {narrow}
      </div>
      <div
        css={{
          display: 'none',
          [media(breakpoint)]: {
            display: 'block',
          },
        }}>
        {wide}
      </div>
    </Fragment>
  )
}
