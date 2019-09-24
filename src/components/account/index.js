import React, { useContext } from 'react'
import { withCookies } from 'react-cookie'
import { flowRight as compose } from 'lodash'

import withPage from '@lib/page/withPage'
import { userContext, AUTH_COOKIE_NAME } from '@lib/auth'

function AccountPage({ cookies }) {
  const userData = useContext(userContext)

  const logout = () => {
    cookies.remove(AUTH_COOKIE_NAME)
    location.href = '/'
  }

  if (!userData.token) {
    return null
  }

  return (
    <div>
      <p>Current User: {userData.displayName}</p>
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

export default compose(
  withCookies,
  withPage({ restricted: true }),
)(AccountPage)
