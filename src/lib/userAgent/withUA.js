import React from 'react'

export default function withUA(PageComponent) {
  function EnhancedPageComponent(props) {
    return <PageComponent {...props} />
  }

  EnhancedPageComponent.getInitialProps = async function(appContext) {
    const { ctx } = appContext
    let userAgent = {}
    let appProps = {}
    if (typeof PageComponent.getInitialProps === 'function') {
      appProps = await PageComponent.getInitialProps(appContext)
    }

    if (!process.browser) {
      const { isMobile, isTablet, isDesktop, isIE } = ctx.req.useragent

      userAgent = {
        isMobile,
        isTablet,
        isDesktop,
        isIE,
      }
    } else {
      userAgent = window.__NEXT_DATA__.props.userAgent
    }

    return { ...appProps, userAgent }
  }

  return EnhancedPageComponent
}
