import React, { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import { getAsPathByRouteName } from '@lib/router/utils'
import { getDataFromToken } from '@modules/_auth/useAuth'

export const userContext = React.createContext({})

export function useMember() {
  return useContext(userContext)
}

const defaultUserData = {
  isAuthenticated: null,
  profile: null,
  token: null,
}

export function AuthProvider({ children }) {
  const router = useRouter()
  const [userData, setUserData] = useState(defaultUserData)

  useEffect(() => {
    console.log('userData', userData)
  }, [userData])

  const signInWithToken = token => {
    setUserData({
      isAuthenticated: token === null ? null : !!token,
      profile: getDataFromToken(token),
      token,
    })
  }

  const signOut = () => {
    setUserData(defaultUserData)
    router.push(getAsPathByRouteName('auth-login'))
  }

  return (
    <userContext.Provider value={{ userData, signInWithToken, signOut }}>
      {children}
    </userContext.Provider>
  )
}
