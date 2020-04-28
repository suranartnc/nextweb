import React, { useEffect } from 'react'
import { get } from 'lodash'
import * as GTM from './gtm'

export default function withStats(PageComponent) {
  function EnhancedPageComponent(props) {
    const asPath = get(props, 'router.asPath')

    useEffect(
      function() {
        GTM.logExperiment()
      },
      [asPath],
    )

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
