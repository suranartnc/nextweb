import { flowRight as compose } from 'lodash'

import withErrorHandling from './withErrorHandling'

export default function withPage(options = {}) {
  return function(Component) {
    const hocs = [withErrorHandling]

    return compose(...hocs)(Component)
  }
}
