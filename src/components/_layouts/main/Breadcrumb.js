import React, { Fragment } from 'react'
import { Link } from '@router'
import { css } from '@emotion/core'

const style = css`
  font-size: 0.8em;
  margin-bottom: 30px;
  a {
    display: inline-box;
    padding: 5px;
  }
`

export default function Breadcrumb({ data = [] }) {
  return (
    <nav css={style}>
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
    </nav>
  )
}
