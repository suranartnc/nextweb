import React, { useContext } from 'react'

export const userContext = React.createContext({
  isAuthenticated: undefined,
})

export function useMember() {
  return useContext(userContext)
}
