import React, { useState } from 'react'
// import Helmet from 'react-helmet'
import firebase from 'firebase/app'
import 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'

import withPage from '@lib/page/withPage'

function LoginPage() {
  const { initialising, user } = useAuthState(firebase.auth())

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = e => {
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email, password)
  }
  const logout = () => {
    firebase.auth().signOut()
  }

  if (initialising) {
    return (
      <div>
        <p>Initialising User...</p>
      </div>
    )
  }

  if (user) {
    return (
      <div>
        <p>Current User: {user.email}</p>
        <button onClick={logout}>Log out</button>
      </div>
    )
  }

  return (
    <form onSubmit={login}>
      <p>
        <label>
          Email:
          <input type="text" onChange={e => setEmail(e.target.value)} />
        </label>
      </p>
      <p>
        <label>
          Password:
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
      </p>
      <button>Log in</button>
    </form>
  )
}

export default withPage()(LoginPage)
