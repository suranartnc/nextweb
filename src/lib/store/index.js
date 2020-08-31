import React from 'react'
import { createStores } from '@modules/_store'
export { Observer } from 'mobx-react'

const storesContext = React.createContext(null)

export const StoreProvider = ({ children }) => {
  const stores = createStores()
  return (
    <storesContext.Provider value={stores}>{children}</storesContext.Provider>
  )
}

export const useStores = () => React.useContext(storesContext)
