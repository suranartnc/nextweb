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
