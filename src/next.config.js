require('dotenv').config()

const path = require('path')
const Dotenv = require('dotenv-webpack')
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer')
const CircularDependencyPlugin = require('circular-dependency-plugin')

const nextConfig = {
  assetPrefix: process.env.ASSET_PREFIX,
  analyzeBrowser: process.env.BUNDLE_ANALYZE === 'browser',
  bundleAnalyzerConfig: {
    browser: {
      analyzerMode: 'static',
      reportFilename: './bundles/client.html',
    },
  },
  webpack: config => {
    config.plugins = config.plugins || []

    config.plugins = [
      ...config.plugins,

      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true,
      }),

      new CircularDependencyPlugin({
        exclude: /a\.js|node_modules/,
        failOnError: true,
        allowAsyncCycles: false,
        cwd: process.cwd(),
      }),
    ]

    return config
  },
}

module.exports = withBundleAnalyzer(nextConfig)
