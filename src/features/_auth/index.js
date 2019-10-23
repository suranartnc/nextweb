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
  deleteCookie(AUTH_COOKIE_NAME)
  location.href = '/'
}

function deleteCookie(name) {
  document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;'
}
