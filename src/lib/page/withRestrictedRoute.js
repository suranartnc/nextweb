import React, { useContext } from 'react'
import { userContext } from '@lib/app/withFirebaseAuth'

export default (restricted = false) => PageComponent => {
  function EnhancedPageComponent(props) {
    const userData = useContext(userContext)

    if (restricted && userData === null) {
      return <div>Forbidden</div>
    }

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
