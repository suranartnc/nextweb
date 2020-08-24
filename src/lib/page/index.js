import React, { useEffect, Fragment } from 'react'
import { useRouter } from 'next/router'

import { useMember } from '@lib/auth'
import { getHrefByRouteName } from '@lib/router/utils'
import * as layouts from '@components/_layouts'

import Meta from './Meta'
import Stats from './Stats'

export function Page({ children, data, metaConfig, options = {} }) {
  const router = useRouter()
  const {
    userData: { isAuthenticated },
  } = useMember()

  const Layout = layouts[options.layout || 'main']
  const restricted = options.restricted || false

  useEffect(() => {
    if (restricted && isAuthenticated === false) {
      router.push(getHrefByRouteName('auth-login', { redirect: router.asPath }))
    }
  }, [restricted, isAuthenticated])

  return (
    <Fragment>
      <Meta data={data} metaConfig={metaConfig} />
      <Stats data={data} metaConfig={metaConfig} />
      <Layout restricted={restricted}>{children}</Layout>
    </Fragment>
  )
}
