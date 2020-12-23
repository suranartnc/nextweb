import { Fragment } from 'react'
import trimEnd from 'lodash/trimEnd'
import { useRouter } from 'next/router'
import { DefaultSeo, NextSeo } from 'next-seo'

export default function Meta({ data, metaConfig = {} }) {
  const {
    getPage = () => 'main',
    getMeta = () => {},
    getSchema = () => {},
  } = metaConfig

  const page = getPage(data)
  const meta = getMeta(data) || {}
  const schemas = getSchema(data) || {}

  const router = useRouter()
  const metaUrl = process.env.META_URL || process.env.HOST
  const newOgUrl = trimEnd(`${metaUrl + router.asPath}`, '/') + '/'

  const parsedMeta = meta[page] || {}
  const schema = schemas[page]

  const { openGraph, ...restMeta } = parsedMeta

  return (
    <Fragment>
      <DefaultSeo
        titleTemplate={`%s`}
        openGraph={{
          type: 'website',
          site_name: 'SiteName',
        }}
      />
      <NextSeo
        {...restMeta}
        canonical={newOgUrl}
        openGraph={{ ...openGraph, url: newOgUrl }}
      />
      {typeof schema === 'function' ? schema() : null}
    </Fragment>
  )
}
