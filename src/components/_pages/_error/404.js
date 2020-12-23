import Link from '@link'
import { Page } from '@lib/page'

export default function Error400Page() {
  let message = 'Page not found.'

  return (
    <Page>
      <p>{message}</p>
      <Link route="home">
        <a>Back to homepage.</a>
      </Link>
    </Page>
  )
}
