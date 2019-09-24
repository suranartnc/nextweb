export default function signIn(req, res) {
  const { email, password } = req.body

  if (email !== 'admin' && password !== 'admin') {
    res.status(401).json({ message: 'Email or password is not correct.' })
  }

  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkaXNwbGF5TmFtZSI6IkpvaG4gRG9lIn0.sPK58JizZbQSm-t--cEgifxJkYDt4UGHpBihVha8pJ0'

  res.status(200).json({ token })
}
