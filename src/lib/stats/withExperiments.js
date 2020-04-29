import React, { Fragment, useEffect } from 'react'
import Helmet from 'react-helmet'
import { get } from 'lodash'

import * as GTM from './gtm'

function getActiveServerSideExperiment(ctx) {
  return {
    expId: 'n_0RbVYTSGmVUqQ-QgiEeg',
    expVar: 1,
  }
}

export default function withStats(PageComponent) {
  function EnhancedPageComponent(props) {
    const asPath = get(props, 'router.asPath')

    const {
      serverSideExperiment: { expId, expVar },
    } = props

    useEffect(
      function() {
        GTM.logExperiment()
      },
      [asPath],
    )

    return (
      <Fragment>
        <Helmet
          script={[
            {
              type: 'text/javascript',
              innerHTML: `expId = '${expId}'; expVar = '${expVar}'`,
            },
          ]}></Helmet>
        <PageComponent {...props} />
      </Fragment>
    )
  }

  EnhancedPageComponent.getInitialProps = async function(ctx) {
    let pageProps = {}

    if (typeof PageComponent.getInitialProps === 'function') {
      pageProps = await PageComponent.getInitialProps(ctx)
    }

    const serverSideExperiment = getActiveServerSideExperiment(ctx)

    return {
      ...pageProps,
      serverSideExperiment,
    }
  }

  return EnhancedPageComponent
}
