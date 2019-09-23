import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie'
import { get } from 'lodash'

export const userContext = React.createContext(null)

export const AUTH_COOKIE_NAME = 'refresh-token'
const AUTH_COOKIE_MAX_AGE = 60 * 60

function getAuthDataFromCallbackURL(query) {
  return {
    token: get(query, 'token', false),
  }
}

function parseToken(token, field) {
  const dataFromToken = {
    displayName: Math.random()
      .toString(36)
      .slice(2),
  }

  return dataFromToken[field]
}

export function withAuth(PageComponent) {
  function EnhancedPageComponent(props) {
    const [cookies, setCookie] = useCookies([AUTH_COOKIE_NAME])
    const [token, setToken] = useState(cookies[AUTH_COOKIE_NAME] || null)
    const router = useRouter()

    useEffect(() => {
      let token = cookies[AUTH_COOKIE_NAME]

      if (!token) {
        const { token: tokenFromURL } = getAuthDataFromCallbackURL(router.query)

        if (tokenFromURL) {
          setCookie(AUTH_COOKIE_NAME, tokenFromURL, {
            maxAge: AUTH_COOKIE_MAX_AGE,
          })
          history.pushState(null, '', '/')
        }

        token = tokenFromURL
      }

      setToken(token)
    }, [])

    const userData = {
      displayName: parseToken(token, 'displayName'),
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
