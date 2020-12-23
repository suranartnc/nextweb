export default function Template({ register, errors }) {
  return (
    <div>
      <p>
        <label>
          Email:
          <input name="email" ref={register} />
        </label>
        <span>{errors.email?.message}</span>
      </p>
      <p>
        <label>
          Password:
          <input name="password" type="password" ref={register} />
        </label>
        <span>{errors.password?.message}</span>
      </p>
      <button>Log in</button>
    </div>
  )
}
