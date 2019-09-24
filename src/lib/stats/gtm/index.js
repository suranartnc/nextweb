import { get } from 'lodash'

// const initialCustomDimensions = {
//   customDM1: undefined,
//   customDM2: undefined,
//   dimension1: undefined,
//   dimension2: undefined,
// }

const variableNames = {
  // pageView: {
  //   page: 'customPage',
  // },
  event: {
    category: 'eventCategory',
    action: 'eventAction',
    label: 'eventLabel',
    value: 'eventValue',
  },
}

function isDataInvalid(data) {
  return typeof get(data, 'event') !== 'string'
}

function gtmPush(data) {
  const dataLayer = window.dataLayer

  if (typeof dataLayer !== 'undefined' && !isDataInvalid(data)) {
    dataLayer.push(data)
  }
}

export function logPageview(customDimensions = {}) {
  // const { pageView } = variableNames

  // const customData = {
  //   ...initialCustomDimensions,
  //   [pageView.page]: `${window.location.pathname}${window.location.search}`,
  //   ...customDimensions,
  // }

  gtmPush({
    event: 'trackPageview',
    // ...customData,
  })
}

export function logEvent({
  category,
  action,
  label,
  value,
  ...customDimensions
}) {
  const { event } = variableNames

  const customData = {
    // ...initialCustomDimensions,
    [event.category]: category,
    [event.action]: action,
    [event.label]: label,
    [event.value]: value,
    // ...(customDimensions || {}),
  }

  gtmPush({
    event: 'trackEvent',
    ...customData,
  })
}
