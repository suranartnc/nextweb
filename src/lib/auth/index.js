import React, { useContext } from 'react'

import useAuth from './useAuth'

export const userContext = React.createContext({
  isAuthenticated: undefined,
})

export function useMember() {
  return useContext(userContext)
}

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
