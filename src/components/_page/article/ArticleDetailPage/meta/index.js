import striptags from 'striptags'

export const meta = {
  main: {
    seo: {
      title: '<%- title %>',
      description: '<%- description %>',
      keywords: '<%- keywords %>',
    },
    og: {
      title: '<%- title %>',
      description: '<%- description %>',
      type: 'website',
      image: '<%- featuredImage %>',
    },
  },
}

export function getTemplateParams(data) {
  const { title, image, tags, excerpt } = data

  return {
    title,
    description: excerpt,
    keywords: tags,
    featuredImage: image.featured,
  }
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
