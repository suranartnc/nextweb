import React from 'react'
import Link from 'next/link'

const linkOptions = {
  prefetch: false,
}

function getAsPath({ pathname, query }) {
  return Object.keys(query).reduce(
    (prev, cur) => prev.replace(`[${cur}]`, query[cur]),
    pathname,
  )
}

export default function CustomLink(props) {
  const { pathname, query = {}, ...restProps } = props
  const href = { pathname, query }
  const asPath = getAsPath({ pathname, query })
  return <Link {...restProps} {...linkOptions} href={href} as={asPath} />
}
