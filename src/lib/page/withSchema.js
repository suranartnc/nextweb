import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { get } from 'lodash'

export default function withSchema(PageComponent) {
  function EnhancedPageComponent(props) {
    const schema = get(props, 'schema')

    return (
      <Fragment>
        {schema && (
          <Helmet
            script={[
              {
                type: 'application/ld+json',
                innerHTML: JSON.stringify(schema),
              },
            ]}
          />
        )}
        <PageComponent {...props} />
      </Fragment>
    )
  }

  EnhancedPageComponent.getInitialProps = async function(ctx) {
    let pageProps = {}
    if (typeof PageComponent.getInitialProps === 'function') {
      pageProps = await PageComponent.getInitialProps(ctx)
    }
    return pageProps
  }

  return EnhancedPageComponent
}
