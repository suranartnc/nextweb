import React from 'react'
import { get, isEmpty, template } from 'lodash'

function renderMeta(metaList) {
  return metaList.map(meta => {
    const key = get(meta, 'property', meta.name) + `:${meta.content}`
    return <meta key={key} {...meta} />
  })
}

const getOGImgSize = url => {
  const matchURL = url.match(/[w]([0-9]*)[h]([0-9]*)/)
  let width = 700
  let height = 366
  if (!isEmpty(matchURL)) {
    width = matchURL[1]
    height = matchURL[2]
  }
  return { width, height }
}

function renderConditionalMeta(metaList) {
  let securedOgMeta = []
  let twitterMeta = []

  const ogImage = metaList.filter(meta => {
    return get(meta, 'property', meta.name) === 'og:image'
  })
  const twitterDomain = metaList.filter(meta => {
    return get(meta, 'property', meta.name) === 'og:url'
  })
  const ogContent = get(ogImage, '[0].content', '')

  /**
   * ป้องกัน array ถูกส่งเข้าไปใน react-helmet แล้วทำให้ error บ้างไม่ error บ้าง
   * บนไฟล์ https://github.com/nfl/react-helmet/blob/master/src/HelmetUtils.js
   */
  if (ogImage.length && typeof ogContent === 'string') {
    const ogWidth = getOGImgSize(ogContent).width
    const ogHeight = getOGImgSize(ogContent).height

    securedOgMeta = [
      <link key={`image_src`} rel="image_src" href={ogContent} />,
      <meta
        key={`og:image:secure_url`}
        property="og:image:secure_url"
        content={ogContent}
      />,
      <meta
        key={`og:image:type`}
        property="og:image:type"
        content="image/jpeg"
      />,
      <meta
        key={`og:image:width`}
        property="og:image:width"
        content={ogWidth}
      />,
      <meta
        key={`og:image:height`}
        property="og:image:height"
        content={ogHeight}
      />,
      <meta key={`twitter:image`} name="twitter:image" content={ogContent} />,
    ]
  }

  if (twitterDomain.length) {
    twitterMeta = [
      <meta
        key={`twitter:domain`}
        name="twitter:domain"
        content={get(twitterDomain, '[0].content', '')}
      />,
    ]
  }

  return [...securedOgMeta, ...twitterMeta]
}

export function renderPageMeta({ title, meta = [] }) {
  const metas = [
    <title key="seo:title">{title.replace(/&quot;/g, '"')}</title>,
    ...renderMeta(meta),
    <meta key="twitter:site:@Sanook" name="twitter:site" content="@Sanook" />,
    <meta
      key="twitter:card:summary_large_image"
      name="twitter:card"
      content="summary_large_image"
    />,
    ...renderConditionalMeta(meta),
  ]
  return metas
}

export function parseMetaConfig(config, templateParams) {
  const result = {
    title: applyParams(get(config, 'seo.title', ''), templateParams),
    meta: [
      ...generateMeta({
        config: get(config, 'seo', {}),
        templateParams,
        ignoreKeys: ['title'],
      }),

      ...generateMeta({
        config: get(config, 'og', {}),
        templateParams,
        keyAttr: 'property',
        keyPrefix: 'og:',
      }),
    ],
  }

  return result
}

function generateMeta({
  config,
  templateParams,
  keyAttr = 'name',
  keyPrefix = '',
  valueAttr = 'content',
  ignoreKeys = [],
}) {
  return Object.keys(config)
    .filter(key => ignoreKeys.includes(key) === false)
    .map(key => {
      const metaKey = keyPrefix + key
      let metaProp = applyParams(config[key], templateParams)

      return {
        [keyAttr]: metaKey,
        [valueAttr]: metaProp,
      }
    })
}

function applyParams(value, templateParams) {
  if (isEmpty(templateParams)) {
    return value
  }

  return template(value)(templateParams).replace(/&quot;/g, '"')
}
