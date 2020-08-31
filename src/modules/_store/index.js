import UIStore from '@modules/_ui/store'
import ErrorStore from '@modules/_error/store'

export function createStores() {
  return {
    ErrorStore: new ErrorStore(),
    UIStore: new UIStore(),
  }
}
