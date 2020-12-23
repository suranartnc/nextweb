import Link from '@link'
import { Page } from '@lib/page'
import * as metaConfig from './meta'

export default function Error400Page({ title, description }) {
  return (
    <Page metaConfig={metaConfig} data={{ title, description }}>
      <p>{description}</p>
      <Link route="home">
        <a>Back to homepage.</a>
      </Link>
    </Page>
  )
}

Error400Page.defaultProps = {
  title: 'Page Not Found',
  description:
    'Sorry, the requested URL was not found on the server. Please check the URL.',
}
