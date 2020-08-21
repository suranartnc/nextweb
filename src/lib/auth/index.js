import React, { useState, useContext } from 'react'

export const userContext = React.createContext({})

export function useMember() {
  return useContext(userContext)
}

export function AuthProvider({ children }) {
  const [userData, setUserData] = useState({
    isAuthenticated: null,
    profile: null,
    token: null,
  })

  return (
    <userContext.Provider value={{ userData, setUserData }}>
      {children}
    </userContext.Provider>
  )
}
