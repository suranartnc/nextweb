import React from 'react'

import withPage from '@lib/page/withPage'
import { useMember } from '@lib/auth'
import { signOut } from '@features/_auth'

import MainLayout from '@components/_layouts/main'

function AccountPage() {
  const { profile, isAuthenticated } = useMember()

  if (!isAuthenticated) {
    return null
  }

  return (
    <MainLayout>
      <div>
        <p>Current User: {profile.name}</p>
        <button onClick={() => signOut()}>Log out</button>
      </div>
    </MainLayout>
  )
}

AccountPage.getInitialProps = async function() {
  return {
    breadcrumb: [
      {
        label: 'Account',
        route: {
          name: 'account',
        },
      },
    ],
  }
}

export default withPage({ restricted: true })(AccountPage)
