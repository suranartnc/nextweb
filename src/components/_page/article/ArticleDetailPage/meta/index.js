import striptags from 'striptags'

export function getMeta(data) {
  const { title, excerpt, tags, image } = data

  const meta = {
    main: {
      title,
      meta: {
        description: excerpt,
        keywords: tags,
        'og:title': title,
        'og:description': excerpt,
        'og:image': image.featured,
      },
    },
  }

  return meta
}

export function getSchema(data) {
  const { title, image, body, pubDate } = data

  const schema = {
    main: [
      {
        '@context': 'http://schema.org/',
        '@type': 'Article',
        datePublished: pubDate,
        headline: title,
        image: `${image.featured}`,
        articleBody: striptags(body),
      },
    ],
  }

  return schema
}
