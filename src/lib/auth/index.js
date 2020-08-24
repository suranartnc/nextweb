import React, { useState, useEffect, useContext } from 'react'
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import { useRouter } from 'next/router'
import jwtDecode from 'jwt-decode'

import { getAsPathByRouteName } from '@lib/router/utils'

import { AUTH_COOKIE_NAME, AUTH_COOKIE_MAX_AGE } from '@modules/_auth/constants'

export const userContext = React.createContext({})

export function useMember() {
  return useContext(userContext)
}

function getDataFromToken(token) {
  if (token === null || token === false) return ''

  return jwtDecode(token)
}

const defaultUserData = {
  isAuthenticated: null,
  profile: null,
  token: null,
}

export function AuthProvider({ children }) {
  const router = useRouter()
  const [userData, setUserData] = useState(defaultUserData)

  // Initialize user data
  useEffect(() => {
    const cookies = parseCookies()
    let tokenInCookie = cookies[AUTH_COOKIE_NAME]

    // Auto login if the user has token in cookie
    if (tokenInCookie !== undefined) {
      signInWithToken(tokenInCookie)
    } else {
      setUserData({
        ...defaultUserData,
        isAuthenticated: false,
      })
    }
  }, [])

  // Save token to cookie after sign in
  useEffect(() => {
    const { isAuthenticated, token } = userData

    const cookies = parseCookies()
    let tokenInCookie = cookies[AUTH_COOKIE_NAME]

    if (isAuthenticated === true && token !== null && !tokenInCookie) {
      const payload = getDataFromToken(token)
      const expires =
        payload?.exp || Math.floor(Date.now() / 1000) + AUTH_COOKIE_MAX_AGE

      setCookie(null, AUTH_COOKIE_NAME, token, {
        path: '/',
        expires: new Date(expires * 1000),
      })
    }
  }, [userData.isAuthenticated])

  // Clear auth cookie after sign out
  useEffect(() => {
    const { isAuthenticated } = userData

    if (isAuthenticated === false) {
      parseCookies()
      destroyCookie(null, AUTH_COOKIE_NAME, { path: '/' })
      router.push(getAsPathByRouteName('auth-login'))
    }
  }, [userData.isAuthenticated])

  const signInWithToken = token => {
    setUserData({
      isAuthenticated: token === null ? null : !!token,
      profile: getDataFromToken(token),
      token,
    })
  }

  const signOut = () => {
    setUserData({ ...defaultUserData, isAuthenticated: false })
  }

  return (
    <userContext.Provider value={{ userData, signInWithToken, signOut }}>
      {children}
    </userContext.Provider>
  )
}
