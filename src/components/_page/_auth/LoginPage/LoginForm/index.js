import React from 'react'
import { useForm } from 'react-hook-form'

import { Router } from '@lib/router'
import { inject } from '@lib/store'
import { signIn } from '@features/_auth'

function LoginForm({ errorStore }) {
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = data => {
    const { redirect } = Router.router.query

    signIn({ ...data, redirect }).catch(error => {
      errorStore.addError({
        title: error.message,
      })
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>
        <label>
          Email:
          <input type="text" name="email" ref={register} />
        </label>
      </p>
      <p>
        <label>
          Password:
          <input
            type="password"
            name="password"
            ref={register({ required: true })}
          />
        </label>
        {errors.password && <span>This field is required</span>}
      </p>
      <button>Log in</button>
    </form>
  )
}

export default inject('errorStore', { observe: false })(LoginForm)
