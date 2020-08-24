import * as AuthService from '@modules/_auth/services'

export default function onSubmit(data) {
  return AuthService.signInWithEmail(data)
}
