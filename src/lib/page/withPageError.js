import { flowRight as compose } from 'lodash'

// import { withUA } from '@lib/userAgent'
// import withGtmScript from '@lib/stats/gtm/withGtmScript'
// import withStats from '@lib/stats/withStats'

export default function withPageError(options = {}) {
  return function(Component) {
    const hocs = [
      // withUA,
      // withGtmScript,
      // withStats
    ]

    return compose(...hocs)(Component)
  }
}
