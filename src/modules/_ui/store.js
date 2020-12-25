import { makeObservable, observable, action, computed } from 'mobx'

export default class UIStore {
  dimensions = {
    width: '',
    height: '',
  }

  constructor(rootStore) {
    if (!process.browser) return

    // this.rootStore = rootStore

    makeObservable(this, {
      dimensions: observable.struct,
      setDimensions: action,
      orientation: computed,
    })

    const listener = () => {
      this.setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    setTimeout(listener, 0)

    window.addEventListener('resize', listener)
  }

  setDimensions(dimensions) {
    this.dimensions = dimensions
  }

  get orientation() {
    const { width, height } = this.dimensions
    return width > height ? 'landscape' : 'portrait'
  }
}
