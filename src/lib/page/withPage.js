import { flowRight as compose } from 'lodash'

import withGtmScript from '../stats/gtm/withGtmScript'
import withStats from '../stats/withStats'
import withErrorHandling from './withErrorHandling'

export default function withPage(options = {}) {
  return function(Component) {
    const hocs = [withGtmScript, withStats, withErrorHandling]

    return compose(...hocs)(Component)
  }
}
