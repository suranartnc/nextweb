import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie'
import { get } from 'lodash'
import jwtDecode from 'jwt-decode'

import { AUTH_COOKIE_NAME, AUTH_COOKIE_MAX_AGE } from './constants'

export default function useAuth() {
  const [cookies, setCookie] = useCookies([AUTH_COOKIE_NAME])
  const [token, setToken] = useState(null)
  const router = useRouter()

  useEffect(() => {
    let token = cookies[AUTH_COOKIE_NAME]

    if (!token) {
      const { token: tokenFromURL } = getAuthDataFromCallbackURL(router.query)

      if (tokenFromURL) {
        const payload = getDataFromToken(tokenFromURL)
        const expires =
          get(payload, 'exp') ||
          Math.floor(Date.now() / 1000) + AUTH_COOKIE_MAX_AGE

        setCookie(AUTH_COOKIE_NAME, tokenFromURL, {
          path: '/',
          expires: new Date(expires * 1000),
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

function getAuthDataFromCallbackURL(query) {
  return {
    token: get(query, 'token', false),
  }
}

function getDataFromToken(token) {
  if (token === null || token === false) return ''

  return jwtDecode(token)
}
