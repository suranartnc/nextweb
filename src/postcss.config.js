const purgecss = [
  '@fullhuman/postcss-purgecss',
  {
    content: [
      './routes/**/*.{js,jsx,ts,tsx}',
      './components/**/*.{js,jsx,ts,tsx}',
    ],
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
