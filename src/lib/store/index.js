import { flowRight as compose } from 'lodash'
import { inject as injectStore, observer } from 'mobx-react'

import RootStore from './rootStore'

let store = null

export function initStore() {
  if (!process.browser) {
    return new RootStore()
  } else {
    if (store === null) {
      store = new RootStore()
    }

    return store
  }
}

export function inject(subStore, { observe = true } = {}) {
  const hocs = [
    injectStore(({ RootStore }) => {
      if (!subStore) {
        return { RootStore: RootStore }
      }

      return { [subStore]: RootStore[subStore] }
    }),
  ]

  if (observe) {
    hocs.push(observer)
  }

  return compose(...hocs)
}
