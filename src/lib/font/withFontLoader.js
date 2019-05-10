import React, { useEffect } from 'react'

import WebFontConfig from './config'

export default function withUA(PageComponent) {
  function EnhancedPageComponent(props) {
    useEffect(() => {
      const WebFont = require('webfontloader')
      WebFont.load(WebFontConfig)
    }, [])

    return <PageComponent {...props} />
  }

  EnhancedPageComponent.getInitialProps = async function(appContext) {
    let appProps = {}
    if (typeof PageComponent.getInitialProps === 'function') {
      appProps = await PageComponent.getInitialProps(appContext)
    }
    return appProps
  }

  return EnhancedPageComponent
}
