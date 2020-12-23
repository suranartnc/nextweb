import { Page } from '@lib/page'

import * as metaConfig from './meta'
import LoginForm from './LoginForm'

export default function LoginPage() {
  return (
    <Page metaConfig={metaConfig}>
      <LoginForm />
    </Page>
  )
}
