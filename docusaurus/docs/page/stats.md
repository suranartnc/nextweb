---
id: stats
title: Stats
---

**NextWeb.js** supports Google Tag Manager out of the box. Let's start with the configuration.

## Configuration

First, you have to define your Google Tag Manager container ID.

```javascript
// .env

GTM_CONTAINER_ID=GTM-XXXXXXX
```

Then you have to set the name of variables you used in Google Tag Manager. Please note that custom dimensions are optional.

```javascript
// src/lib/stats/gtm/index.js

const variableNames = {
  event: {
    category: 'eventCategory',
    action: 'eventAction',
    label: 'eventLabel',
    value: 'eventValue',
  },
}

// Only if you have some custom dimensions
const initialCustomDimensions = {
  customDM1: undefined,
  customDM2: undefined,
  dimension1: undefined,
  dimension2: undefined,
}
```

## Page Tracking

The page tracking will work automatically if you finished your configuration properly. Let's change to another page and see the network.

### Custom Dimensions

But if you want to attach some custom dimensions to the page tracking, you have to add the ```stats.gtm.customDimensions``` property to the returning object from ```getInitialProps()```.

```javascript
import withPage from '@lib/page/withPage'
import * as ArticleService from '@features/article/data/services'

function ArticleDetailPage({ articleDetail }) {
  ...
}

ArticleDetailPage.getInitialProps = async ({ asPath, query }) => {
  const articleDetail = await ArticleService.getArticleDetail({ id: query.id })

  return {
    articleDetail,

    // Define custom dimensions for the page tracking here...
    stats: {
      gtm: {
        customDimensions: {
          customDM1: articleDetail.author.name,
          customDM2: articleDetail.pubDate,
        },
      },
    },
  }
}

export default withPage()(ArticleDetailPage)
```

## Event Tracking

This is very straightforward, just import the ```GTM.logEvent``` helper and call it with appropriate values.

```javascript
import * as GTM from '@lib/stats/gtm'

const trackEvent = (e) => {
  GTM.logEvent({
    category: 'Navigation',
    action: 'Clicked',
    label: 'Some Menu',

    // custom dimensions
    dimension1: 'value 1',
    dimension2: 'value 2',
  })
}
```

Please note that if you want to attach some custom dimensions to the event, just add them to the argument.

