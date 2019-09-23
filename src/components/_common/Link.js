import React from 'react'
import Routes, { Link } from '@router'

const linkOptions = {
  prefetch: false,
}

export default function CustomLink(props) {
  const { route, params = {}, ...restProps } = props

  const routeObject = Routes.findByName(route)
  const page = routeObject.page
  const queryString = Object.keys(params)
    .map(key => `${key}=${params[key]}`)
    .join('&')

  const href = `${page}?${queryString}`
  const asPath = decodeURIComponent(routeObject.getAs(params))

  return <Link {...restProps} {...linkOptions} href={href} as={asPath} />
}
