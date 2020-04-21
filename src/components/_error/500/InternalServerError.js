import React from 'react'
import Link from '@link'

export default function InternalServerError({ errorCode, lang = 'th' }) {
  let errorMessage = 'Something went wrong.'

  if (errorCode) {
    // errorMessage = getLang({ key: errorCode, lang })
  }

  return (
    <div>
      <p>{errorMessage}</p>
      <Link key="home" route="home" passHref>
        <a>Back to homepage.</a>
      </Link>
    </div>
  )
}
