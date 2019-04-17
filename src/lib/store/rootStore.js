import { configure } from 'mobx'
import UIStore from './ui'

configure({ enforceActions: 'observed' })

export default class RootStore {
  constructor() {
    this.uiStore = new UIStore(this)
  }
}
