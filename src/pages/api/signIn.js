import jwt from 'jsonwebtoken'

const secret = 'nextweb'

export default function signIn(req, res) {
  const { email, password } = req.body

  let response = null
  let status = 200

  if (email !== 'admin' && password !== 'admin') {
    status = 401
    response = { message: 'Email or password is not correct.' }
  } else {
    const payload = {
      sub: email,
      name: email,
      role: 'admin',
      exp: Math.floor(Date.now() / 1000) + 60 * 60, // 1 hour
    }

    const token = jwt.sign(payload, secret)
    response = { token }
  }

  res.status(status).json(response)
}
