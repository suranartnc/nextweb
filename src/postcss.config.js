const purgecss = [
  '@fullhuman/postcss-purgecss',
  {
    content: ['./src/routes/**/*.{js,ts}', './src/components/**/*.{js,ts}'],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
  },
]

module.exports = {
  plugins: [
    'tailwindcss',
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
    'postcss-preset-env',
  ],
}
