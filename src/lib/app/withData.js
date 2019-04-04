import React from 'react'

export default function withData(Page) {
  function PageWithData(props) {
    return <Page {...props} />
  }

  PageWithData.getInitialProps = async function(appContext) {
    let appProps = {}

    // if (process.browser) return appProps

    if (typeof Page.getInitialProps === 'function') {
      appProps = await Page.getInitialProps(appContext)
    }

    return appProps
  }

  return PageWithData
}
