import { Router } from '@lib/router'
import { signIn } from '@features/_auth'

export default function onSubmit(data) {
  const { redirect } = Router.router.query
  return signIn({ ...data, redirect })
}
