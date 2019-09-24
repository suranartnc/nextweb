import React, { useEffect, useContext } from 'react'
import { Router } from '@router'
import { userContext } from '@lib/auth'

export default (restricted = false) => PageComponent => {
  function EnhancedPageComponent(props) {
    const { isAuthenticated } = useContext(userContext)

    useEffect(() => {
      if (restricted && isAuthenticated === false) {
        Router.pushRoute('login', {
          redirect: props.router.asPath,
        })
      }
    }, [restricted, isAuthenticated])

    return <PageComponent {...props} />
  }

  EnhancedPageComponent.getInitialProps = async function(ctx) {
    let pageProps = {}
    if (typeof PageComponent.getInitialProps === 'function') {
      pageProps = await PageComponent.getInitialProps(ctx)
    }
    return pageProps
  }

  return EnhancedPageComponent
}
