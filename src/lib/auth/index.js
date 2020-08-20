import React, { useContext } from 'react'
import useAuth from '@modules/_auth/useAuth'

export const userContext = React.createContext({
  isAuthenticated: undefined,
})

export function useMember() {
  return useContext(userContext)
}

export function AuthProvider({ children }) {
  const userData = useAuth()

  return (
    <userContext.Provider value={userData}>{children}</userContext.Provider>
  )
}
