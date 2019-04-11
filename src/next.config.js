require('dotenv').config()

const path = require('path')
const Dotenv = require('dotenv-webpack')
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer')
const CircularDependencyPlugin = require('circular-dependency-plugin')

const nextConfig = {
  assetPrefix: process.env.ASSET_PREFIX,
  useFileSystemPublicRoutes: false,
  sassLoaderOptions: {
    outputStyle:
      process.env.NODE_ENV !== 'production' ? 'expanded' : 'compressed',
  },
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
    }

    return config
  },
}

module.exports = withBundleAnalyzer(nextConfig)
