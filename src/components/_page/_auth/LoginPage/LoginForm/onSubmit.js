import { signIn } from '@modules/_auth'

export default function onSubmit(data) {
  return signIn(data)
}
