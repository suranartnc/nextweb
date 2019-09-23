import React, { useState, useEffect, useContext } from 'react'
import { inject } from 'mobx-react'
import { flowRight as compose } from 'lodash'

import { Router } from '@router'
import withPage from '@lib/page/withPage'
import { userContext } from '@lib/firebase/auth'

function signInWithEmailAndPassword({ email, password }) {
  return new Promise((resolve, reject) => {
    if (!email || !password) {
      reject(new Error('No email or password'))
    }

    resolve({
      token: 'this is a token',
    })
  }).then(({ token }) => {
    location.href = `/?token=${token}`
  })
}

function LoginPage({ RootStore }) {
  const userData = useContext(userContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = e => {
    e.preventDefault()

    signInWithEmailAndPassword({ email, password }).catch(error => {
      RootStore.errorStore.addError({
        title: error.message,
      })
    })
  }

  useEffect(() => {
    if (userData) {
      const { redirect } = Router.router.query

      if (redirect) {
        Router.push(redirect)
        return
      }

      Router.pushRoute('account')
    }
  }, [userData])

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

export default compose(
  withPage(),
  inject('RootStore'),
)(LoginPage)
