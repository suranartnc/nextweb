import React, { Fragment } from 'react'
import { Link } from '@router'

function LinkItem({ children }) {
  return <a css={{ display: 'inline-box', padding: 5 }}>{children}</a>
}

export default function Breadcrumb({ data = [] }) {
  return (
    <nav css={{ fontSize: '0.8em', marginBottom: 30 }}>
      <Link key="Home" to="home">
        <LinkItem>Home</LinkItem>
      </Link>

      {data.map(({ label, route }) => (
        <Fragment key={label}>
          <span>&gt;</span>
          <Link to={route.name} params={route.params}>
            <LinkItem>{label}</LinkItem>
          </Link>
        </Fragment>
      ))}
    </nav>
  )
}
