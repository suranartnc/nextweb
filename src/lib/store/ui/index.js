import { observable, action } from 'mobx'

export default class UIStore {
  dimensions = observable({
    width: '',
    height: '',
  })

  constructor(rootStore) {
    if (!process.browser) return

    this.rootStore = rootStore

    const listener = () => {
      this.setDimensions(window.innerWidth, window.innerHeight)
    }
    listener()

    window.addEventListener('resize', listener)
  }

  @action setDimensions(width, height) {
    this.dimensions.width = width
    this.dimensions.height = height
  }
}
