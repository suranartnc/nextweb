import React, { useEffect, useContext } from 'react'
import { Router } from '@router'
import { userContext } from './withAuth'

export default (restricted = false) => PageComponent => {
  function EnhancedPageComponent(props) {
    const userData = useContext(userContext)

    useEffect(() => {
      if (restricted && !userData) {
        Router.pushRoute('login', {
          redirect: props.router.asPath,
        })
      }
    }, [restricted, userData])

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
