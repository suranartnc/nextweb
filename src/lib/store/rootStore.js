import { configure } from 'mobx'

import UIStore from '@features/ui/store'
import ErrorStore from '@features/error/store'

configure({ enforceActions: 'observed' })

export default class RootStore {
  constructor() {
    this.uiStore = new UIStore(this)
    this.errorStore = new ErrorStore(this)
  }
}
