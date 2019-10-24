import { configure } from 'mobx'

import UIStore from '@features/_ui/store'
import ErrorStore from '@features/_error/store'

configure({ enforceActions: 'observed' })

export default class RootStore {
  constructor() {
    this.uiStore = new UIStore(this)
    this.errorStore = new ErrorStore(this)
  }
}
