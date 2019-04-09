import React, { useEffect, useState } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'

export const userContext = React.createContext(null)

const useFirebaseAuth = () => {
  const [userData, setUserData] = useState(undefined)

  useEffect(() => {
    setUserData(firebase.auth().currentUser)

    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      setUserData(user)
    })

    return () => {
      unsubscribe()
    }
  }, [])

  return userData
}

export default function withFirebaseAuth(Page) {
  function PageWithFirebaseAuth(props) {
    const userData = useFirebaseAuth()

    return (
      <userContext.Provider value={userData}>
        <Page {...props} />
      </userContext.Provider>
    )
  }

  PageWithFirebaseAuth.getInitialProps = async function(appContext) {
    let appProps = {}
    if (typeof Page.getInitialProps === 'function') {
      appProps = await Page.getInitialProps(appContext)
    }
    return appProps
  }

  return PageWithFirebaseAuth
}
