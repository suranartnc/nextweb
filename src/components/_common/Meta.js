import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { get, isArray, isEmpty } from 'lodash'

export default function Meta({ router, data, metaConfig = {} }) {
  const {
    getPage = () => 'main',
    getMeta = () => {},
    getSchema = () => {},
  } = metaConfig

  const page = getPage(data)
  const schema = getSchema(data) || {}
  const meta = getMeta(data) || {}

  const parsedMeta = {
    title: get(meta[page], 'title', ''),
    meta: get(meta[page], 'meta', {}),
    schema: schema[page],
  }

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
      </Helmet>
    </Fragment>
  )
}

function isSocialMeta(meta) {
  const patterns = ['og:', 'twitter:']
  return patterns.some(pattern => meta.indexOf(pattern) !== -1)
}
