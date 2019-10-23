import { useEffect, useState } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'

export default function useAuth() {
  const [userData, setUserData] = useState(undefined)

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      setUserData(user)
    })

    return () => {
      unsubscribe()
    }
  }, [])

  return userData
}
