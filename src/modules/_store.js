import RootStore from '@lib/store/rootStore'
import UIStore from '@modules/_ui/store'

export default class CustomStore extends RootStore {
  constructor() {
    super()
    this.uiStore = new UIStore(this)
  }
}
