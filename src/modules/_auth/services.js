import { postAPI } from '@lib/api/helpers'

export function signInWithEmail({ email, password }) {
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

export function signOut() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ status: 200 })
    }, 2000)
  })
}
