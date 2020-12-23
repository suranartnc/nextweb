import { Fragment } from 'react'
import { breakpoints } from '@modules/_ui/config'

export function media(bp = 'lg') {
  return `@media (min-width: ${breakpoints[bp]})`
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
