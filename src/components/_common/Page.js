import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Router } from '@router'

import { useMember } from '@lib/auth'
import MainLayout from '@components/_layouts/main'

export default function Page({ children, options = {} }) {
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

  return <Layout restricted={restricted}>{children}</Layout>
}
