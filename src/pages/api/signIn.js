export default function signIn(req, res) {
  const { email, password } = req.query

  if (email !== 'admin' && password !== 'admin') {
    res.end(JSON.stringify({ token: '' }))
  }

  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkaXNwbGF5TmFtZSI6IkpvaG4gRG9lIn0.sPK58JizZbQSm-t--cEgifxJkYDt4UGHpBihVha8pJ0'

  res.setHeader('Content-Type', 'application/json')
  res.statusCode = 200
  res.end(JSON.stringify({ token }))
}
