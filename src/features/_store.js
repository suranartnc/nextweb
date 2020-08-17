import RootStore from '@lib/store/rootStore'
import UIStore from '@features/_ui/store'

export default class CustomStore extends RootStore {
  constructor() {
    super()
    this.uiStore = new UIStore(this)
  }
}
