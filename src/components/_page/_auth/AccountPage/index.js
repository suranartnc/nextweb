import React from 'react'

import { Page } from '@lib/page'
import { useMember } from '@lib/auth'
import { signOut } from '@features/_auth'

import * as metaConfig from './meta'

export default function AccountPage() {
  const { profile } = useMember()

  return (
    <Page metaConfig={metaConfig} options={{ restricted: true }}>
      <div>
        <p>Current User: {profile.name}</p>
        <button onClick={() => signOut()}>Log out</button>
      </div>
    </Page>
  )
}