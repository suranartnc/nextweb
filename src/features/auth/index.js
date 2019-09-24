import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie'
import { get } from 'lodash'

export const AUTH_COOKIE_NAME = 'refresh-token'
const AUTH_COOKIE_MAX_AGE = 60 * 60

export function signIn({ email, password, redirect }) {
  return new Promise((resolve, reject) => {
    if (!email || !password) {
      reject(new Error('No email or password'))
    }

    resolve({
      token: 'this is a token',
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
    displayName: parseToken(token, 'displayName'),
    token,
  }

  return userData
}

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

function deleteCookie(name) {
  document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;'
}
