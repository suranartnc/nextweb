import compose from 'lodash/flowRight'
import { withErrorHandling } from '@lib/error'

export default function withDynamicRendering(options = {}) {
  return function(Component) {
    const hocs = [withErrorHandling]

    return compose(...hocs)(Component)
  }
}
