import Link from '@link'
import { Page } from '@lib/page'

export default function Error400Page() {
  let errorMessage = 'There is no resource for path.'

  return (
    <Page>
      <p>{errorMessage}</p>
      <Link route="home">
        <a>Back to homepage.</a>
      </Link>
    </Page>
  )
}
