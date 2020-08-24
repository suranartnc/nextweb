import { flowRight as compose } from 'lodash'

import { withErrorHandling } from '@lib/error'

export default function withDynamicRendering(options = {}) {
  return function(Component) {
    const hocs = [withErrorHandling]

    return compose(...hocs)(Component)
  }
}
