import React, { Fragment } from 'react'
import { Link } from '@router'
import styled from '@emotion/styled'

const Nav = styled.nav`
  font-size: 0.8em;
  margin-bottom: 30px;
`

const NavLink = styled.a`
  display: inline-box;
  padding: 5px;
`

export default function Breadcrumb({ data = [] }) {
  return (
    <Nav>
      <Link key="Home" to="home">
        <NavLink>Home</NavLink>
      </Link>

      {data.map(({ label, route }) => (
        <Fragment key={label}>
          <span>&gt;</span>
          <Link to={route.name} params={route.params}>
            <NavLink>{label}</NavLink>
          </Link>
        </Fragment>
      ))}
    </Nav>
  )
}
