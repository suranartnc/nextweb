import Link from '@link'
import { Page } from '@lib/page'
import * as metaConfig from './meta'

export default function Error500Page({ title, description }) {
  return (
    <Page metaConfig={metaConfig} data={{ title, description }}>
      <p>{description}</p>
      <Link route="home">
        <a>Back to homepage.</a>
      </Link>
    </Page>
  )
}

Error500Page.defaultProps = {
  title: 'Server Error',
  description:
    'Oops, Something went wrong. Try to refesh this page or feel free to contact us if the problem persists.',
}
