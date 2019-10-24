import React, { Fragment, forwardRef } from 'react'
import Link from '@link'

const LinkItem = forwardRef((props, ref) => (
  <a {...props} ref={ref} css={{ display: 'inline-box', padding: 5 }}>
    {props.children}
  </a>
))

export default function Breadcrumb({ data = [] }) {
  return (
    <nav css={{ fontSize: '0.8em', marginBottom: 30 }}>
      <Link key="Home" route="home">
        <LinkItem>Home</LinkItem>
      </Link>

      {data.map(({ label, route }) => (
        <Fragment key={label}>
          <span>&gt;</span>
          <Link route={route.name} params={route.params}>
            <LinkItem>{label}</LinkItem>
          </Link>
        </Fragment>
      ))}
    </nav>
  )
}
