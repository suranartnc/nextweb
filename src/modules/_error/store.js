import { makeObservable, observable, action } from 'mobx'
import uniqueId from 'lodash/uniqueId'

export default class ErrorStore {
  expired = 5000
  errors = []

  constructor(rootStore) {
    // this.rootStore = rootStore

    makeObservable(this, {
      errors: observable,
      addError: action,
      removeError: action,
    })
  }

  addError(error) {
    const id = uniqueId()

    this.errors.push({
      ...error,
      id,
    })

    setTimeout(() => {
      this.removeError(id)
    }, this.expired)
  }

  removeError(id) {
    this.errors = this.errors.filter(error => error.id !== id)
  }
}
