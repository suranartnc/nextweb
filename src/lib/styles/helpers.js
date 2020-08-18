import React, { Fragment } from 'react'

import { breakpoints } from '@features/_ui/config'

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
