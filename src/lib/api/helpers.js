import axios from 'axios'

const defaultTimeout = 10000

export function fetchAPI({
  apiUrl = process.env.API_URL,
  path,
  token,
  timeout = defaultTimeout,
  ...options
}) {
  return axios({
    baseURL: `${apiUrl}${path}`,
    headers: {
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    timeout,
    ...options,
  }).then(({ data }) => data)
}

export function postAPI({
  apiUrl = process.env.API_URL,
  path,
  data,
  token,
  timeout = defaultTimeout,
  ...options
}) {
  return axios({
    method: 'post',
    url: `${apiUrl}${path}`,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    data,
    timeout,
    ...options,
  }).then(({ data }) => data)
}

export function fetchGQL({
  apiURL = process.env.API_URL,
  query,
  timeout = defaultTimeout,
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
    timeout,
  }).then(({ data }) => data)
}

export function throwError(status = 500) {
  const err = new Error()
  err.response = { status }
  throw err
}
