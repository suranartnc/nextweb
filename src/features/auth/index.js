import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie'
import { get } from 'lodash'
import jwt from 'jsonwebtoken'
import axios from 'axios'

export const AUTH_COOKIE_NAME = 'refresh-token'
const AUTH_COOKIE_MAX_AGE = 60 * 60

// A service to sign the user in
export function signIn({ email, password, redirect }) {
  return axios({
    // method: 'post',
    url: `/api/signIn`,
    // headers: { 'Content-Type': 'application/json' },
    // data: {
    //   email,
    //   password,
    // },
  }).then(({ data }) => {
    if (!data.token) {
      throw new Error('Login failed')
    }

    if (redirect) {
      location.href = `${redirect}?token=${data.token}`
      return
    }

    location.href = `/?token=${data.token}`
  })
}

// A react hook to collect auth data, then makes app knows the user is now logged in
export function useAuth() {
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
      }

      token = tokenFromURL
    }

    setToken(token)
  }, [])

  const userData = {
    isAuthenticated: token === null ? null : !!token,
    profile: getDataFromToken(token),
  }

  return userData
}

export function signOut() {
  deleteCookie(AUTH_COOKIE_NAME)
  location.href = '/'
}

function getAuthDataFromCallbackURL(query) {
  return {
    token: get(query, 'token', false),
  }
}

function getDataFromToken(token) {
  if (token === null) return ''

  return jwt.decode(token)
}

function deleteCookie(name) {
  document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;'
}
