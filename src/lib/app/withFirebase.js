import React, { useEffect, useState } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
}

export const userContext = React.createContext(null)

const useFirebaseAuth = config => {
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    const app = firebase.initializeApp(config)
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      setUserData(user)
    })

    return () => {
      app.delete()
      unsubscribe()
    }
  }, [])

  return userData
}

export default function withFirebase(Page) {
  function PageWithFirebase(props) {
    const userData = useFirebaseAuth(firebaseConfig)

    return (
      <userContext.Provider value={userData}>
        <Page {...props} />
      </userContext.Provider>
    )
  }

  PageWithFirebase.getInitialProps = async function(appContext) {
    let appProps = {}
    if (typeof Page.getInitialProps === 'function') {
      appProps = await Page.getInitialProps(appContext)
    }
    return appProps
  }

  return PageWithFirebase
}
