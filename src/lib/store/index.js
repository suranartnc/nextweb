import RootStore from './rootStore'

let store = null

export default function initStore() {
  if (!process.browser) {
    return new RootStore()
  } else {
    if (store === null) {
      store = new RootStore()
    }

    return store
  }
}
