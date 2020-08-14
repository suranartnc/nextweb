import { flowRight as compose } from 'lodash'

import { withUA } from '@lib/userAgent'
import { withErrorHandling } from '@lib/error'

export default function withDynamicRendering(options = {}) {
  return function(Component) {
    const hocs = [withUA, withErrorHandling]

    return compose(...hocs)(Component)
  }
}
