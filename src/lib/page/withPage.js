import { flowRight as compose } from 'lodash'

import { withUA } from '@lib/userAgent'
import withGtmScript from '@lib/stats/gtm/withGtmScript'
import withStats from '@lib/stats/withStats'
import { withAuth } from '@lib/auth'
import withRestrictedPage from '@lib/auth/withRestrictedPage'

import withMeta from './withMeta'
import withSchema from './withSchema'
import withLayout from './withLayout'
import withErrorHandling from './withErrorHandling'

export default function withPage(options = {}) {
  return function(Component) {
    const hocs = [
      withUA,
      withAuth,
      withMeta,
      withSchema,
      withGtmScript,
      withStats,
      withRestrictedPage(options.restricted),
      withLayout(options.layout),
      withErrorHandling,
    ]

    return compose(...hocs)(Component)
  }
}
