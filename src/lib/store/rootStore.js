import { configure } from 'mobx'
import ErrorStore from '@features/_error/store'

configure({ enforceActions: 'observed' })

export default class RootStore {
  constructor() {
    this.errorStore = new ErrorStore(this)
  }
}
