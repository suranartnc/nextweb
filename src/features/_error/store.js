import { observable, action } from 'mobx'
import { uniqueId } from 'lodash'

export default class ErrorStore {
  @observable
  errors = []

  expired = 5000

  @action
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

  @action
  removeError(id) {
    this.errors = this.errors.filter(error => error.id !== id)
  }
}
