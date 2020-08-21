require('dotenv').config()

const path = require('path')
const compose = require('lodash/flowRight')
const Dotenv = require('dotenv-webpack')
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer')
const CircularDependencyPlugin = require('circular-dependency-plugin')
const exportPathMap = require('./exportPathMap')

const nextConfig = {
  exportPathMap,
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
      config.resolve.alias = {
        ...config.resolve.alias,
        react: 'preact/compat',
        'react-dom': 'preact/compat',
      }
    }

    return config
  },
}

module.exports = compose(withBundleAnalyzer)(nextConfig)
