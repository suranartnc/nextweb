import React from 'react'
import Link from 'next/link'

import { getAsPathByRouteName, getHrefByRouteName } from './utils'

const linkOptions = {
  prefetch: false,
}

export default function CustomLink(props) {
  const { route, params = {}, ...restProps } = props

  const href = getHrefByRouteName(route, params)
  const asPath = getAsPathByRouteName(route, params)
  return <Link {...restProps} {...linkOptions} href={href} as={asPath} />
}
