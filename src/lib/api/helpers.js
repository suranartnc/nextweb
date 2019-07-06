import axios from 'axios'

export function fetchAPI({
  apiUrl = process.env.API_URL,
  path,
  timeout = 10000,
  ...options
}) {
  return axios({
    baseURL: `${apiUrl}${path}`,
    timeout,
    ...options,
  }).then(({ data }) => data)
}

export function fetchGQL({
  apiURL = process.env.API_URL,
  query,
  timeout = 10000,
  variables = null,
}) {
  return axios({
    method: 'post',
    url: apiURL,
    headers: { 'Content-Type': 'application/json' },
    data: {
      query,
      variables,
      operationName: null,
    },
  }).then(({ data }) => data)
}

export function throwError(status = 500) {
  const err = new Error()
  err.response = { status }
  throw err
}
