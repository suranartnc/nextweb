import React, { useContext } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'

import withPage from '@lib/page/withPage'
import { userContext } from '@lib/firebase/auth'

function AccountPage() {
  const userData = useContext(userContext)

  const logout = () => {
    firebase.auth().signOut()
  }

  if (!userData) {
    return null
  }

  return (
    <div>
      <p>Current User: {userData.email}</p>
      <button onClick={logout}>Log out</button>
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
