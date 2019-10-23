import React, { useState, useContext, useEffect } from 'react'
import jwt from 'jsonwebtoken'
import { get } from 'lodash'
import { useCookies } from 'react-cookie'
import { useRouter } from 'next/router'

import { AUTH_COOKIE_NAME } from '@features/_auth'

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

// A react hook to collect auth data, then makes app knows the user is now logged in
function useAuth() {
  const [cookies, setCookie] = useCookies([AUTH_COOKIE_NAME])
  const [token, setToken] = useState(null)
  const router = useRouter()

  useEffect(() => {
    let token = cookies[AUTH_COOKIE_NAME]

    if (!token) {
      const { token: tokenFromURL } = getAuthDataFromCallbackURL(router.query)

      if (tokenFromURL) {
        setCookie(AUTH_COOKIE_NAME, tokenFromURL, {
          path: '/',
          expires: new Date(getDataFromToken(tokenFromURL)['exp'] * 1000),
        })
      }

      token = tokenFromURL
    }

    setToken(token)
  }, [])

  const userData = {
    isAuthenticated: token === null ? null : !!token,
    profile: getDataFromToken(token),
    token,
  }

  return userData
}

function getDataFromToken(token) {
  if (token === null) return ''

  return jwt.decode(token)
}

function getAuthDataFromCallbackURL(query) {
  return {
    token: get(query, 'token', false),
  }
}
