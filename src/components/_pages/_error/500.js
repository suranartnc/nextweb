import Link from '@link'
import { Page } from '@lib/page'

export default function Error500Page() {
  let message = 'Something went wrong.'

  return (
    <Page>
      <p>{message}</p>
      <Link route="home">
        <a>Back to homepage.</a>
      </Link>
    </Page>
  )
}
