const withBundleAnalyzer = require('@zeit/next-bundle-analyzer')

const nextConfig = {
  analyzeBrowser: process.env.BUNDLE_ANALYZE === 'browser',
  bundleAnalyzerConfig: {
    browser: {
      analyzerMode: 'static',
      reportFilename: './bundles/client.html',
    },
  },
}

module.exports = withBundleAnalyzer(nextConfig)
