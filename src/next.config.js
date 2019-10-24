require('dotenv').config()

const path = require('path')
const compose = require('lodash/flowRight')
const Dotenv = require('dotenv-webpack')
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer')
const CircularDependencyPlugin = require('circular-dependency-plugin')
const exportPathMap = require('./exportPathMap')

// const withOffline = require('next-offline')
// const WebpackPwaManifest = require('webpack-pwa-manifest')

const nextConfig = {
  exportTrailingSlash: true,
  exportPathMap,
  useFileSystemPublicRoutes: false,
  assetPrefix: process.env.ASSET_PREFIX,
  analyzeBrowser: process.env.BUNDLE_ANALYZE === 'browser',
  bundleAnalyzerConfig: {
    browser: {
      analyzerMode: 'static',
      reportFilename: './bundles/client.html',
    },
  },
  webpack: (config, { dev, isServer }) => {
    config.plugins = config.plugins || []

    config.plugins = [
      ...config.plugins,

      new Dotenv({
        path: path.join(process.cwd(), '.env'),
        systemvars: true,
      }),
    ]

    if (dev && !isServer) {
      config.plugins.push(
        new CircularDependencyPlugin({
          exclude: /a\.js|node_modules/,
          failOnError: true,
          allowAsyncCycles: false,
          cwd: process.cwd(),
        }),
      )
    }

    if (!dev && !isServer) {
      const originalEntry = config.entry
      config.entry = async () => {
        const entries = await originalEntry()
        entries['main.js'].unshift('@babel/polyfill')
        return entries
      }

      // config.plugins.push(
      //   new WebpackPwaManifest({
      //     filename: 'manifest.json',
      //     inject: false,
      //     fingerprints: false,
      //     name: 'My Progressive Web App',
      //     description: 'My awesome Progressive Web App!',
      //     short_name: 'MyPWA',
      //     start_url: '/',
      //     display: 'standalone',
      //     orientation: 'portrait',
      //     background_color: '#ffffff',
      //     theme_color: '#ffffff',
      //     publicPath: '_next',
      //     icons: [
      //       {
      //         src: path.join(process.cwd(), 'src/static/icons/next.jslogo.png'),
      //         size: [96, 128, 192, 256],
      //         destination: path.join('static', 'pwa/icons'),
      //       },
      //     ],
      //   }),
      // )
    }

    return config
  },
  // workboxOpts: {
  //   // importScripts: ['push-notifications.abcd1234.js'],
  //   runtimeCaching: [
  //     {
  //       urlPattern: new RegExp(`^${process.env.API_URL}`),
  //       handler: 'networkFirst',
  //       options: {
  //         cacheName: 'api-cache',
  //         cacheableResponse: {
  //           statuses: [200],
  //         },
  //       },
  //     },
  //     {
  //       urlPattern: /.*\.(?:png|jpg|jpeg|svg|gif)/,
  //       handler: 'cacheFirst',
  //       options: {
  //         cacheName: 'image-cache',
  //         cacheableResponse: {
  //           statuses: [0, 200],
  //         },
  //         // expiration: {
  //         //   maxEntries: 5,
  //         //   maxAgeSeconds: 60,
  //         // },
  //       },
  //     },
  //     {
  //       urlPattern: new RegExp('/.*'),
  //       handler: 'networkFirst',
  //       options: {
  //         cacheName: 'html-cache',
  //       },
  //     },
  //   ],
  // },
}

module.exports = compose(
  // withOffline,
  withBundleAnalyzer,
)(nextConfig)
