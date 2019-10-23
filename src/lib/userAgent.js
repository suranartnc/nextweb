import React, { useContext } from 'react'

export const userAgentContext = React.createContext({})

export function useUA() {
  return useContext(userAgentContext)
}

export function withUA(PageComponent) {
  function EnhancedPageComponent(props) {
    return (
      <userAgentContext.Provider value={props.userAgent}>
        <PageComponent {...props} />
      </userAgentContext.Provider>
    )
  }

  EnhancedPageComponent.getInitialProps = async function(ctx) {
    let pageProps = {}
    if (typeof PageComponent.getInitialProps === 'function') {
      pageProps = await PageComponent.getInitialProps(ctx)
    }

    let userAgent = {}

    if (!process.browser) {
      if (ctx.req.useragent) {
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
        } = ctx.req.useragent

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
      } else {
        // userAgent for Export Static
        userAgent = {
          source: '',
          device: {
            isMobile: false,
          },
          browser: null,
          os: null,
        }
      }
    } else {
      userAgent = window.__NEXT_DATA__.props.pageProps.userAgent
    }

    return { ...pageProps, userAgent }
  }

  return EnhancedPageComponent
}
