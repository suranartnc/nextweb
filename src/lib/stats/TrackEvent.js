import React, { forwardRef } from 'react'
import * as GTM from './gtm'

function TrackEvent({ children, event, forwardedRef, ...restProps }) {
  return React.cloneElement(children, {
    ...restProps,
    ref: forwardedRef,
    onClick: e => {
      restProps.onClick(e)

      GTM.logEvent(event)
    },
  })
}

export default forwardRef((props, ref) => (
  <TrackEvent {...props} forwardedRef={ref} />
))
