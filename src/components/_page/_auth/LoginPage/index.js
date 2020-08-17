import React, { useState } from 'react'

import { Router } from '@router'
import { inject } from '@lib/store'
import { Page } from '@lib/page'
import { signIn } from '@features/_auth'

import * as metaConfig from './meta'

function LoginPage({ errorStore }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = e => {
    e.preventDefault()

    const { redirect } = Router.router.query

    signIn({ email, password, redirect }).catch(error => {
      errorStore.addError({
        title: error.message,
      })
    })
  }

  return (
    <Page metaConfig={metaConfig}>
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
            <input
              type="password"
              onChange={e => setPassword(e.target.value)}
            />
          </label>
        </p>
        <button>Log in</button>
      </form>
    </Page>
  )
}

export default inject('errorStore', { observe: false })(LoginPage)
