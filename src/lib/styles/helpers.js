import { useState, useLayoutEffect } from 'react'

const DESKTOP_MIN_WIDTH = 960

export function media(minWidth) {
  return `@media (min-width: ${minWidth}px)`
}

export function Responsive({
  breakpoint = DESKTOP_MIN_WIDTH,
  wide = null,
  narrow = null,
  prerender = null,
}) {
  const width = useWindowWidth()
  return width === null ? prerender : width >= breakpoint ? wide : narrow
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
