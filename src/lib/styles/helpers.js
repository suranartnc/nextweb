import React, { Fragment } from 'react'

export const breakpoints = {
  md: '48em', // 768px
  lg: '60em', // 960px
  xl: '80em', // 1280px
}

export function media(bp = 'lg') {
  return `@media (min-width: ${breakpoints[bp]})`
}

export function Adaptive({ userAgent, desktop = null, mobile = null }) {
  const isMobile = userAgent.device.isMobile
  return isMobile ? mobile : desktop
}

export function Responsive({
  breakpoint = 'md',
  desktop = null,
  mobile = null,
}) {
  return (
    <Fragment>
      <div
        css={{
          display: 'block',
          [media(breakpoint)]: {
            display: 'none',
          },
        }}>
        {mobile}
      </div>
      <div
        css={{
          display: 'none',
          [media(breakpoint)]: {
            display: 'block',
          },
        }}>
        {desktop}
      </div>
    </Fragment>
  )
}
