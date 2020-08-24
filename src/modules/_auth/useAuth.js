import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { parseCookies, setCookie } from 'nookies'
import jwtDecode from 'jwt-decode'

import { AUTH_COOKIE_NAME, AUTH_COOKIE_MAX_AGE } from './constants'

// export default function useAuth() {
//   const cookies = parseCookies()

//   const [token, setToken] = useState(null)
//   const router = useRouter()
//   console.log('router', router)

//   useEffect(() => {
//     let token = cookies[AUTH_COOKIE_NAME]

//     if (!token) {
//       const { token: tokenFromURL } = getAuthDataFromCallbackURL(router.query)

//       if (tokenFromURL) {
//         const payload = getDataFromToken(tokenFromURL)
//         const expires =
//           payload?.exp || Math.floor(Date.now() / 1000) + AUTH_COOKIE_MAX_AGE

//         setCookie(null, AUTH_COOKIE_NAME, tokenFromURL, {
//           path: '/',
//           expires: new Date(expires * 1000),
//         })
//       }

//       token = tokenFromURL
//     }

//     setToken(token)
//   }, [router.query])

//   const userData = {
//     isAuthenticated: token === null ? null : !!token,
//     profile: getDataFromToken(token),
//     token,
//   }

//   return userData
// }

export function getDataFromToken(token) {
  if (token === null || token === false) return ''

  return jwtDecode(token)
}
