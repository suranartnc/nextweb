import { BlogJsonLd } from 'next-seo'
import { getStatic } from '@lib/static'
import { getAsPathByRouteName } from '@lib/router/utils'

export function getMeta(data) {
  const { title, excerpt, tags, image } = data

  const meta = {
    main: {
      title,
      description: excerpt,
      openGraph: {
        title,
        description: excerpt,
        images: [
          { url: image.featured || getStatic('og/og-product-default.png') },
        ],
      },
      additionalMetaTags: [
        {
          name: 'keywords',
          content: tags,
        },
      ],
    },
  }

  return meta
}

export function getSchema(data) {
  const { id, title, excerpt, image, author, pubDate } = data

  const schema = {
    main: () => (
      <BlogJsonLd
        url={getAsPathByRouteName('article-detail', { id })}
        title={title}
        description={excerpt}
        images={[image.featured]}
        authorName={author.name}
        datePublished={pubDate}
        dateModified={pubDate}
      />
    ),
  }

  return schema
}

export function getGTMDimensions(data) {
  return {
    customDM1: data.author.name,
    customDM2: data.pubDate,
  }
}
