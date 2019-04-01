import React from 'react'
import { Link } from '@router'

export default function Navigation() {
  return (
    <div>
      <Link to="home">Home</Link>
      <Link to="about">About</Link>
    </div>
  )
}
