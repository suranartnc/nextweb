import { useState, useEffect } from 'react'
import { get } from 'lodash'
import jwt from 'jsonwebtoken'
import { useRouter } from 'next/router'

import { useCookies } from 'react-cookie'
import { AUTH_COOKIE_NAME, AUTH_COOKIE_MAX_AGE } from '@features/_auth'

export default function useAuth() {
  const [token, setToken] = useState(null)
  const router = useRouter()
  const [cookies, setCookie] = useCookies([AUTH_COOKIE_NAME])

  useEffect(() => {
    let token = cookies[AUTH_COOKIE_NAME]

    if (!token) {
      const tokenFromURL = get(router.query, 'token', false)

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

function getDataFromToken(token) {
  if (token === null) return null

  return jwt.decode(token)
}
