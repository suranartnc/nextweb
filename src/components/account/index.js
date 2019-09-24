import React, { useContext } from 'react'

import withPage from '@lib/page/withPage'
import { userContext } from '@lib/auth'
import { signOut } from '@features/auth'

function AccountPage() {
  const userData = useContext(userContext)

  if (!userData.token) {
    return null
  }

  return (
    <div>
      <p>Current User: {userData.displayName}</p>
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
