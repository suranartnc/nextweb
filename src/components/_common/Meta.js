import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { isArray, isEmpty } from 'lodash'

import { renderPageMeta, parseMetaConfig } from '@lib/meta'

export default function Meta({ data, metaConfig = {} }) {
  const {
    meta,
    getPage = () => 'main',
    getSchema = () => {},
    getTemplateParams = () => {},
  } = metaConfig

  if (!meta) {
    throw new Error('Meta needed!')
  }

  const page = getPage(data)
  const schema = getSchema(data) || {}
  const templateParams = getTemplateParams(data)

  const parsedMeta = {
    meta: parseMetaConfig(meta[page], templateParams),
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
        {renderPageMeta(parsedMeta.meta)}
      </Helmet>
    </Fragment>
  )
}
