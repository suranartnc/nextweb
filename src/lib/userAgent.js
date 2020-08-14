export function withUA(getServerSideProps) {
  return async context => {
    let pageProps = {}
    pageProps = await getServerSideProps(context)

    let userAgent = {}

    const {
      source,
      isMobile,
      isTablet,
      isDesktop,
      isSafari,
      isFirefox,
      isChrome,
      isEdge,
      isIE,
      isWindows,
      isMac,
      isiPad,
      isAndroid,
      isiPhone,
    } = context.req.useragent

    userAgent = {
      source,
      device: {
        isMobile,
        isTablet,
        isDesktop,
      },
      browser: {
        isSafari,
        isFirefox,
        isChrome,
        isEdge,
        isIE,
      },
      os: {
        isWindows,
        isMac,
        isiPad,
        isAndroid,
        isiPhone,
      },
    }

    return { props: { ...pageProps.props, userAgent } }
  }
}
