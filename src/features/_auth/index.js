import { trimEnd } from 'lodash'
import { postAPI } from '@lib/api/helpers'
import { destroyCookie } from 'nookies'
import { getFullUrlByRoute } from '@lib/router/utils'

import { AUTH_COOKIE_NAME } from './constants'

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

export function signOut() {
  destroyCookie(null, AUTH_COOKIE_NAME)
  location.href = getFullUrlByRoute('home')
}

export function resetAuthentication({ redirect = '' }) {
  destroyCookie(null, AUTH_COOKIE_NAME)
  location.href = trimEnd(getFullUrlByRoute('auth-login', { redirect }), '/')
}
