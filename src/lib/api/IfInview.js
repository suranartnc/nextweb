import React, { useState } from 'react'

import { Waypoint } from 'react-waypoint'

export default function IfInview({ offset = 100, children }) {
  const [shouldLoad, setshouldLoad] = useState(false)

  if (shouldLoad === true) {
    return children
  }

  return (
    <Waypoint
      onEnter={() => setshouldLoad(true)}
      bottomOffset={`-${offset}px`}
      fireOnRapidScroll={false}
    />
  )
}
