export function getCookie(name) {
  if (!process.browser) return false

  const v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)')
  return v ? v[2] : null
}

export function deleteCookie(
  name,
  { path = process.env.PATH_COOKIE || '/' } = {},
) {
  const d = new Date()
  d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * -1)

  document.cookie =
    name + '=' + '' + ';path=' + path + ';expires=' + d.toGMTString()
}
