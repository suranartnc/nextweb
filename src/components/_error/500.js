import React from 'react'
import Link from '@link'
import { Page } from '@lib/page'

export default function Error500Page() {
  let errorMessage = 'Something went wrong.'

  return (
    <Page>
      <p>{errorMessage}</p>
      <Link route="home">
        <a>Back to homepage.</a>
      </Link>
    </Page>
  )
}
