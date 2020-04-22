import React, { Fragment } from 'react'
import { useUA } from '@lib/userAgent'

export function Adaptive({ wide = null, narrow = null }) {
  const {
    device: { isMobile },
  } = useUA()

  return isMobile ? narrow : wide
}
