import React, { useState, useLayoutEffect, useContext } from 'react'
import { UserAgentContext } from '@lib/userAgent'

export const breakpoints = {
  md: '48em', // 768px
  lg: '60em', // 960px
  xl: '80em', // 1280px
}

export function media(bp = 'lg') {
  return `@media (min-width: ${breakpoints[bp]})`
}

export function Adaptive({ wide = null, narrow = null }) {
  const { isMobile } = useContext(UserAgentContext)
  return isMobile ? narrow : wide
}

export function Responsive(options) {
  if (!process.browser) return null

  return <UISwitcher {...options} />
}

function UISwitcher({
  breakpoint = 'lg',
  wide = null,
  narrow = null,
  prerender = null,
}) {
  const width = useWindowWidth()
  const breakpointInPx = breakpoints[breakpoint].replace('em', '') * 16
  return width === null ? prerender : width >= breakpointInPx ? wide : narrow
}

function useWindowWidth() {
  const [width, setWidth] = useState(null)
  useLayoutEffect(() => {
    const listener = () => setWidth(window.innerWidth)
    window.addEventListener('resize', listener)
    listener()
    return () => window.removeEventListener('resize', listener)
  }, [])
  return width
}
