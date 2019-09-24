import React, { useContext } from 'react'

import withPage from '@lib/page/withPage'
import { userContext } from '@lib/auth'
import { signOut } from '@features/auth'

function AccountPage() {
  const { profile, isAuthenticated } = useContext(userContext)

  if (!isAuthenticated) {
    return null
  }

  return (
    <div>
      <p>Current User: {profile.displayName}</p>
      <button onClick={() => signOut()}>Log out</button>
    </div>
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
