import React from 'react'

export default function Template({ register, errors }) {
  return (
    <div>
      <p>
        <label>
          Email:
          <input type="text" name="email" ref={register} />
        </label>
        {errors.email && <span>{errors.email.message}</span>}
      </p>
      <p>
        <label>
          Password:
          <input type="password" name="password" ref={register} />
        </label>
        {errors.password && <span>{errors.password.message}</span>}
      </p>
      <button>Log in</button>
    </div>
  )
}
