import React from 'react'
import Form from '@lib/form/Form'
import { useMember } from '@lib/auth'
import { getDataFromToken } from '@modules/_auth/useAuth'

import Template from './Template'
import schema from './schema'
import onSubmit from './onSubmit'

export default function LoginForm({ defaultValues }) {
  const { setUserData } = useMember()

  return (
    <Form
      defaultValues={defaultValues}
      schema={schema}
      onSubmit={onSubmit(({ token }) => {
        setUserData({
          isAuthenticated: token === null ? null : !!token,
          profile: getDataFromToken(token),
          token,
        })
      })}>
      {Template}
    </Form>
  )
}
