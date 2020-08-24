import React, { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import { parseCookies, setCookie, destroyCookie } from 'nookies'
import jwtDecode from 'jwt-decode'

import { getAsPathByRouteName } from '@lib/router/utils'
import * as AuthService from '@modules/_auth/services'
import { AUTH_COOKIE_NAME, AUTH_COOKIE_MAX_AGE } from '@modules/_auth/config'

const defaultUserData = {
  isAuthenticated: null,
  profile: null,
  token: null,
}

const userContext = React.createContext({})

export function useMember() {
  return useContext(userContext)
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

  const signInWithToken = token => {
    setUserData({
      isAuthenticated: token === null ? null : !!token,
      profile: getDataFromToken(token),
      token,
    })
  }

  const signOut = () => {
    AuthService.signOut().then(response => {
      if (response.status === 200) {
        destroyCookie(null, AUTH_COOKIE_NAME, { path: '/' })
        setUserData({ ...defaultUserData, isAuthenticated: false })
        router.push(getAsPathByRouteName('auth-login'))
      }
    })
  }

  return (
    <userContext.Provider value={{ userData, signInWithToken, signOut }}>
      {children}
    </userContext.Provider>
  )
}

function getDataFromToken(token) {
  if (token === null || token === false) return ''

  return jwtDecode(token)
}
