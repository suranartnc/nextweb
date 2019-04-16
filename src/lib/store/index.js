import UIStore from './ui'

export default class RootStore {
  constructor() {
    this.uiStore = new UIStore(this)
  }
}
