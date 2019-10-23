import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie'
import { get } from 'lodash'
import jwt from 'jsonwebtoken'
import { postAPI } from '@lib/api/helpers'

export const AUTH_COOKIE_NAME = 'nextweb-token'

// A service to sign the user in
export function signIn({ email, password, redirect }) {
  return postAPI({
    apiUrl: process.env.HOST,
    path: '/api/signIn',
    data: {
      email,
      password,
    },
  })
    .then(({ token }) => {
      if (redirect) {
        location.href = `${redirect}?token=${token}`
        return
      }

      location.href = `/?token=${token}`
    })
    .catch(({ response }) => {
      throw new Error(response.data.message)
    })
}

// A react hook to collect auth data, then makes app knows the user is now logged in
export function useAuth() {
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
