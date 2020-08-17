import React, { useEffect, Fragment } from 'react'
import { useRouter } from 'next/router'
import { Router } from '@router'

import { useMember } from '@lib/auth'
import MainLayout from '@components/_layouts/main'
import Meta from './Meta'

export default function Page({ children, data, metaConfig, options = {} }) {
  const router = useRouter()
  const { isAuthenticated } = useMember()

  const Layout = options.layout || MainLayout
  const restricted = options.restricted || false

  useEffect(() => {
    if (restricted && isAuthenticated === false) {
      Router.pushRoute('auth-login', {
        redirect: router.asPath,
      })
    }
  }, [restricted, isAuthenticated])

  return (
    <Fragment>
      <Meta data={data} metaConfig={metaConfig} />
      <Layout restricted={restricted}>{children}</Layout>
    </Fragment>
  )
}
