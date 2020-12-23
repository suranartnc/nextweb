import { useEffect, Fragment } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import * as GTM from '@lib/stats/gtm'

const gtmContainerId = process.env.GTM_CONTAINER_ID

export default function Meta({ data, metaConfig = {} }) {
  const router = useRouter()

  const { getGTMDimensions = () => {} } = metaConfig
  const dimensions = getGTMDimensions(data) || {}

  const isSSR =
    !process.browser || window.__NEXT_DATA__.props.isSSR === undefined

  useEffect(
    function() {
      if (!isSSR) {
        setTimeout(() => {
          GTM.logPageview(dimensions)
        }, 500)
      }
    },
    [router.asPath],
  )

  return (
    <Fragment>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `var dimensionOBJ = {};
              var dataLayer = [];
              dimensionOBJ.userLogin = (function() {
                  if ((document.cookie.match('(^|; )' + 'smimid' + '=([^;]*)') || 0)[2] != undefined) {
                      return 1;
                  } else {
                      return 0;
                  }
              })();
              if ((document.cookie.match('(^|; )' + 'smimid' + '=([^;]*)') || 0)[2] != undefined) {
                  dimensionOBJ.userSMI = (document.cookie.match('(^|; )' + 'smimid' + '=([^;]*)')[2]);
                  dimensionOBJ.userID = (document.cookie.match('(^|; )' + 'smimid' + '=([^;]*)')[2]);
              }
              dataLayer = [dimensionOBJ];

              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmContainerId}');`,
          }}
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmContainerId}" height="0" width="0" style="display: none; visibility: hidden"></iframe>`,
          }}
        />
      </Head>
    </Fragment>
  )
}
