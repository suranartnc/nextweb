import React, { useState } from 'react'
import { inject } from 'mobx-react'
import { flowRight as compose } from 'lodash'

import { Router } from '@router'
import withPage from '@lib/page/withPage'

function signInWithEmailAndPassword({ email, password, redirect }) {
  return new Promise((resolve, reject) => {
    if (!email || !password) {
      reject(new Error('No email or password'))
    }

    resolve({
      token: 'this is a token',
    })
  }).then(({ token }) => {
    if (redirect) {
      location.href = `${redirect}?token=${token}`
      return
    }

    location.href = `/?token=${token}`
  })
}

function LoginPage({ RootStore }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = e => {
    e.preventDefault()

    const { redirect } = Router.router.query
    signInWithEmailAndPassword({ email, password, redirect }).catch(error => {
      RootStore.errorStore.addError({
        title: error.message,
      })
    })
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

export default compose(
  withPage(),
  inject('RootStore'),
)(LoginPage)
