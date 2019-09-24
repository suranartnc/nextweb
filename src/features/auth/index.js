import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie'
import { get } from 'lodash'
import jwt from 'jsonwebtoken'

export const AUTH_COOKIE_NAME = 'refresh-token'
const AUTH_COOKIE_MAX_AGE = 60 * 60

export function signIn({ email, password, redirect }) {
  return new Promise((resolve, reject) => {
    if (!email || !password) {
      reject(new Error('No email or password'))
    }

    const exampleJWT =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkaXNwbGF5TmFtZSI6IkpvaG4gRG9lIn0.sPK58JizZbQSm-t--cEgifxJkYDt4UGHpBihVha8pJ0'

    resolve({
      token: exampleJWT,
    })
  }).then(({ token }) => {
    if (redirect) {
      location.href = `${redirect}?token=${token}`
      return
    }

    location.href = `/?token=${token}`
  })
}

export function signOut() {
  deleteCookie(AUTH_COOKIE_NAME)
  location.href = '/'
}

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
