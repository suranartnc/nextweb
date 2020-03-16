import React from 'react'
import Link from '@link'

export default function Error400NotFound({ errorCode, lang = 'th' }) {
  let errorMessage = 'Page not found.'

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
