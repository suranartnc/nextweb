import React from 'react'
import { useAuth } from '@features/auth'

export const userContext = React.createContext({
  isAuthenticated: undefined,
})

export function withAuth(PageComponent) {
  function EnhancedPageComponent(props) {
    const userData = useAuth()

    return (
      <userContext.Provider value={userData}>
        <PageComponent {...props} />
      </userContext.Provider>
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
