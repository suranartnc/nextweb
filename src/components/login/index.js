import React, { useState, useContext } from 'react'
// import Helmet from 'react-helmet'
import firebase from 'firebase/app'
import 'firebase/auth'

import withPage from '@lib/page/withPage'
import { userContext } from '@lib/app/withFirebase'

function LoginPage() {
  const userData = useContext(userContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = e => {
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email, password)
  }
  const logout = () => {
    firebase.auth().signOut()
  }

  if (userData) {
    return (
      <div>
        <p>Current User: {userData.email}</p>
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
