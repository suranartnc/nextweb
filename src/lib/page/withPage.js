import { flowRight as compose } from 'lodash'

import { withUA } from '@lib/userAgent'
import withGtmScript from '@lib/stats/gtm/withGtmScript'
import withStats from '@lib/stats/withStats'
import { withRestrictedRoute } from '@lib/firebase/auth'

import withMeta from './withMeta'
import withSchema from './withSchema'
import withLayout from './withLayout'
import withErrorHandling from './withErrorHandling'

export default function withPage(options = {}) {
  return function(Component) {
    const hocs = [
      withUA,
      withMeta,
      withSchema,
      withGtmScript,
      withStats,
      withRestrictedRoute(options.restricted),
      withLayout(options.layout),
      withErrorHandling,
    ]

    return compose(...hocs)(Component)
  }
}
