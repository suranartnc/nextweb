import React from 'react'
import { Provider } from 'mobx-react'

import { initStore } from './'

export default function withMobX(PageComponent) {
  function EnhancedPageComponent(props) {
    const rootStore = initStore()

    return (
      <Provider RootStore={rootStore}>
        <PageComponent {...props} />
      </Provider>
    )
  }

  EnhancedPageComponent.getInitialProps = async function(appContext) {
    let appProps = {}
    if (typeof PageComponent.getInitialProps === 'function') {
      appProps = await PageComponent.getInitialProps(appContext)
    }
    return appProps
  }

  return EnhancedPageComponent
}
