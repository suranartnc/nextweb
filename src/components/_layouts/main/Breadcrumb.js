import React, { Fragment } from 'react'
import { Link } from '@router'

Breadcrumb.defaultProps = {
  navs: [
    {
      label: 'Articles',
      route: {
        name: 'home',
      },
    },
    {
      label: 'Article Detail',
      route: {
        name: 'home',
      },
    },
  ],
}

export default function Breadcrumb({ navs }) {
  return (
    <nav>
      <Link key="Home" to="home">
        <a>Home</a>
      </Link>

      {navs.map(({ label, route }) => (
        <Fragment key={label}>
          <span>&gt;</span>
          <Link to={route.name}>
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
