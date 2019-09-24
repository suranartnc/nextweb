import { observable, action, computed } from 'mobx'

export default class UIStore {
  @observable.struct
  dimensions = {
    width: '',
    height: '',
  }

  constructor(rootStore) {
    if (!process.browser) return

    // this.rootStore = rootStore

    const listener = () => {
      this.setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    setTimeout(listener, 0)

    window.addEventListener('resize', listener)
  }

  @action
  setDimensions(dimensions) {
    this.dimensions = dimensions
  }

  @computed
  get orientation() {
    const { width, height } = this.dimensions
    return width > height ? 'landscape' : 'portrait'
  }
}
