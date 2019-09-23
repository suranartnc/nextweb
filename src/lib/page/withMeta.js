import React, { Fragment } from 'react'
import Helmet from 'react-helmet'

function isSocialMeta(meta) {
  const patterns = ['og:', 'twitter:']
  return patterns.some(pattern => meta.indexOf(pattern) !== -1)
}

export default function withMeta(PageComponent) {
  function EnhancedPageComponent(props) {
    const { router, title, meta = [] } = props

    return (
      <Fragment>
        <Helmet>
          {title && <title>{title}</title>}
          {Object.keys(meta).map(name =>
            isSocialMeta(name) ? (
              <meta key={name} property={name} content={meta[name]} />
            ) : (
              <meta key={name} name={name} content={meta[name]} />
            ),
          )}
          <meta property="og:url" content={router.asPath} />
          <link rel="canonical" href={router.asPath} />
        </Helmet>
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
