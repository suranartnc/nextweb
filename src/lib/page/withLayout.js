import React from 'react'
import MainLayout from '@components/_layouts/main'

export default (hasLayout = true) => PageComponent => {
  function EnhancedPageComponent(props) {
    if (!hasLayout) {
      return <PageComponent {...props} />
    }

    return (
      <MainLayout breadcrumb={props.breadcrumb}>
        <PageComponent {...props} />
      </MainLayout>
    )
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
