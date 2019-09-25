import React, { forwardRef } from 'react'
import * as GTM from './gtm'

export default forwardRef((props, ref) => {
  const { children, event, ...restProps } = props

  return React.cloneElement(children, {
    ...restProps,
    ref,
    onClick: e => {
      restProps.onClick(e)

      GTM.logEvent(event)
    },
  })
})
