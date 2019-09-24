import React from 'react'

export default function Error400Page({ routeMisMatched }) {
  return routeMisMatched ? <p>Page Not Found.</p> : <p>No resource.</p>
}
