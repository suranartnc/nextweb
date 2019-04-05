import React, { Fragment } from 'react'
import { Link } from '@router'

export default function Breadcrumb({ data = [] }) {
  return (
    <nav>
      <Link key="Home" to="home">
        <a>Home</a>
      </Link>

      {data.map(({ label, route }) => (
        <Fragment key={label}>
          <span>&gt;</span>
          <Link to={route.name} params={route.params}>
            <a>{label}</a>
          </Link>
        </Fragment>
      ))}

      <style jsx>{`
        nav {
          font-size: 0.8em;
          margin-bottom: 30px;
        }
        a {
          display: inline-box;
          padding: 5px;
        }
      `}</style>
    </nav>
  )
}
