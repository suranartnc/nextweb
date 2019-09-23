import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie'

export const userContext = React.createContext(null)

export const AUTH_COOKIE_NAME = 'refresh-token'
const AUTH_COOKIE_MAX_AGE = 60 * 60

function findTokenInAsPath(asPath) {
  const parts = asPath.split('access_token=')

  if (parts.length === 2) {
    return parts[1].split('&token_type=')[0]
  }

  return false
}

export function withAuth(PageComponent) {
  function EnhancedPageComponent(props) {
    const [token, setToken] = useState(null)
    const [cookies, setCookie] = useCookies([AUTH_COOKIE_NAME])
    const { asPath } = useRouter()

    useEffect(() => {
      let token = cookies[AUTH_COOKIE_NAME]

      if (!token) {
        const tokenFromHash = findTokenInAsPath(asPath)

        if (tokenFromHash) {
          setCookie(AUTH_COOKIE_NAME, tokenFromHash, {
            maxAge: AUTH_COOKIE_MAX_AGE,
          })
          history.pushState(null, '', '/')
        }

        token = tokenFromHash
      }

      setToken(token)
    }, [asPath])

    const userData = {
      token,
    }

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
