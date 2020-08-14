export function getMeta() {
  const meta = {
    main: {
      title: 'Homepage',
      meta: {
        description: '',
        keywords: '',
        'og:title': '',
        'og:description': '',
        'og:image': '',
      },
    },
  }

  return meta
}

export function getSchema() {
  const schema = {
    main: [
      {
        '@context': 'http://schema.org/',
        '@type': 'Website',
        headline: '',
        image: '',
      },
    ],
  }

  return schema
}
