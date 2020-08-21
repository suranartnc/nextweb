import Router from 'next/router'
import { signIn } from '@modules/_auth'
import { getAsPathByRouteName } from '@lib/router/utils'

export default function onSubmit(callback) {
  return data => {
    const { redirect } = Router.router.query

    return signIn({ ...data })
      .then(callback)
      .then(() => {
        if (redirect) {
          Router.push(redirect)
          return
        }

        Router.push(getAsPathByRouteName('auth-dashboard'))
      })
  }
}
