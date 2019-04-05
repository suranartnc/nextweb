import { get } from 'lodash'

const initialPageViewData = {
  customDM1: undefined,
  customDM2: undefined,
}

const initialEventData = {
  eventCategory: undefined,
  eventAction: undefined,
  eventLabel: undefined,
  eventValue: undefined,
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
  const dataPageViewGTM = {
    ...initialPageViewData,
    customPage: `${window.location.pathname}${window.location.search}`,
    ...(gtmData || {}),
  }

  gtmPush({
    event: 'trackPageview',
    ...dataPageViewGTM,
  })
}

export function logEvent(gtmEventData) {
  const dataEventGTM = {
    ...initialEventData,
    ...(gtmEventData || {}),
  }

  gtmPush({
    event: 'trackEvent',
    ...dataEventGTM,
  })
}
