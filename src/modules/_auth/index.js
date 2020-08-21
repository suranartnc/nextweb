import trimEnd from 'lodash.trimend'
import { postAPI } from '@lib/api/helpers'
import { destroyCookie } from 'nookies'

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
  location.href = '/'
}

export function resetAuthentication({ redirect = '' }) {
  destroyCookie(null, AUTH_COOKIE_NAME)
  location.href = trimEnd(`/?redirect=${redirect}`, '/')
}
