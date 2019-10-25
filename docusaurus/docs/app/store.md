---
id: store
title: Store
---

```Context``` is designed to share data that can be considered “global” for a tree of React components. But for complex data, we recommend using the concept of data store from [**MobX**](https://mobx.js.org/).

## When to Use a Store

Actually, global data can be kept in a ```context``` but there are some reasons using store is a better idea.

### Complex Logic for Updating Value 
If your global data are read-only, using ```context``` is fine. But if that data can be changed by some components using some complex logics. Grouping these logic together is a good idea.

```javascript
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
```



### Isolating Data for Large Scale App

Another good reason is isolating global data into multiple stores will helps your app simpler a lot. You will know which global data the app keeps immediately after seeing the ```RootStore``` file.

```javascript
import UIStore from '@features/_ui/store'
import ErrorStore from '@features/_error/store'
// Import more store here...

export default class RootStore {
  constructor() {
    this.uiStore = new UIStore(this)
    this.errorStore = new ErrorStore(this)

    // Register more store here...
  }
}
```
