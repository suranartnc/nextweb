import { flowRight as compose } from 'lodash'

import { withUA } from '@lib/userAgent'
import withGtmScript from '@lib/stats/gtm/withGtmScript'
import withStats from '@lib/stats/withStats'

import withLayout from './withLayout'

export default function withPageError(options = {}) {
  return function(Component) {
    const hocs = [withUA, withGtmScript, withStats, withLayout(options.layout)]

    return compose(...hocs)(Component)
  }
}
