import React from 'react'
import Form from '@lib/form/Form'

import onSubmit from './onSubmit'

export default function LoginForm() {
  return (
    <Form onSubmit={onSubmit}>
      {({ register, errors }) => (
        <div>
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
        </div>
      )}
    </Form>
  )
}
