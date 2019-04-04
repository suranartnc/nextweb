import get from 'lodash/get'

const cleanedOldGtmData = {
  customDM1: undefined,
  customDM2: undefined,
}

const cleanedOldGtmEventData = {
  eventCategory: undefined,
  eventAction: undefined,
  eventLabel: undefined,
  eventValue: undefined,
  customDM1: undefined,
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

export function logPageview(gtmData) {
  const dataGTM = {
    ...cleanedOldGtmData,
    customPage: `${window.location.pathname}${window.location.search}`,
    ...(gtmData || {}),
  }

  gtmPush({
  'event': 'trackPageview', // eslint-disable-line
  ...dataGTM, // eslint-disable-line
  })
}

export function logEvent(gtmEventData) {
  const dataEventGTM = {
    ...cleanedOldGtmEventData,
    ...(gtmEventData || {}),
  }

  gtmPush({
    'event': 'trackEvent', // eslint-disable-line
    ...dataEventGTM, // eslint-disable-line
  })
}
