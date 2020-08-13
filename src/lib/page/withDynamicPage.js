import { flowRight as compose } from 'lodash'

import { withUA } from '@lib/userAgent'
// import withGtmScript from '@lib/stats/gtm/withGtmScript'
// import withStats from '@lib/stats/withStats'

import withMeta from './withMeta'
import withSchema from './withSchema'
// import withErrorHandling from './withErrorHandling'

export default function withDynamicPage(options = {}) {
  return function(Component) {
    const hocs = [
      withUA,
      withMeta,
      withSchema,
      // withGtmScript,
      // withStats,
      // withErrorHandling,
    ]

    return compose(...hocs)(Component)
  }
}
