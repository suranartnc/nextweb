import React, { useEffect, Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { get, isArray, isEmpty } from 'lodash'
import { useRouter } from 'next/router'

import * as GTM from '@lib/stats/gtm'

const gtmContainerId = process.env.GTM_CONTAINER_ID

export default function Meta({ data, metaConfig = {} }) {
  const {
    getPage = () => 'main',
    getMeta = () => {},
    getSchema = () => {},
    getGTMDimensions = () => {},
  } = metaConfig

  const page = getPage(data)
  const meta = getMeta(data) || {}
  const schema = getSchema(data) || {}
  const dimensions = getGTMDimensions(data) || {}

  const parsedMeta = {
    title: get(meta[page], 'title', ''),
    meta: get(meta[page], 'meta', {}),
    schema: schema[page],
  }

  const router = useRouter()

  const isSSR =
    !process.browser || window.__NEXT_DATA__.props.isSSR === undefined

  useEffect(
    function() {
      if (!isSSR) {
        setTimeout(() => {
          GTM.logPageview(dimensions)
        }, 500)
      }
    },
    [router.asPath],
  )

  return (
    <Fragment>
      <Helmet
        script={[
          ...(isArray(parsedMeta.schema) && !isEmpty(parsedMeta.schema)
            ? parsedMeta.schema.map(schema => ({
                type: 'application/ld+json',
                innerHTML: JSON.stringify(schema),
              }))
            : []),
          {
            type: 'text/javascript',
            innerHTML: `
              dataLayer = [];
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmContainerId}');`,
          },
        ]}>
        {parsedMeta.title && <title>{parsedMeta.title}</title>}
        {Object.keys(parsedMeta.meta).map(name =>
          isSocialMeta(name) ? (
            <meta key={name} property={name} content={parsedMeta.meta[name]} />
          ) : (
            <meta key={name} name={name} content={parsedMeta.meta[name]} />
          ),
        )}
        <meta property="og:url" content={router.asPath} />
        <link rel="canonical" href={router.asPath} />
        <noscript>
          {`<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmContainerId}" height="0" width="0" style="display: none; visibility: hidden"></iframe>`}
        </noscript>
      </Helmet>
    </Fragment>
  )
}

function isSocialMeta(meta) {
  const patterns = ['og:', 'twitter:']
  return patterns.some(pattern => meta.indexOf(pattern) !== -1)
}
