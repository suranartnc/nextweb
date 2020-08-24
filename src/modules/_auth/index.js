import { destroyCookie } from 'nookies'
import trimEnd from 'lodash.trimend'

import { postAPI } from '@lib/api/helpers'

export const AUTH_COOKIE_NAME = 'nextweb-token'
export const AUTH_COOKIE_MAX_AGE = 60 * 60 // 1 hour

export function signIn({ email, password, redirect }) {
  return postAPI({
    apiUrl: process.env.HOST,
    path: '/api/signIn',
    data: {
      email,
      password,
    },
  }).catch(({ response }) => {
    throw new Error(response.data.message)
  })
}

export function resetAuthentication({ redirect = '' }) {
  destroyCookie(null, AUTH_COOKIE_NAME)
  location.href = trimEnd(`/?redirect=${redirect}`, '/')
}
