import React, { useEffect } from 'react'
import { get } from 'lodash'
import * as GTM from './gtm'

export default function withStats(PageComponent) {
  function EnhancedPageComponent(props) {
    const asPath = get(props, 'router.asPath')
    const customDimensions = get(props, 'stats.gtm.customDimensions', {})

    const isSSR =
      !process.browser || window.__NEXT_DATA__.props.isSSR === undefined

    useEffect(
      function() {
        if (!isSSR) {
          setTimeout(() => {
            GTM.logPageview(customDimensions)
          }, 500)
        }
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
