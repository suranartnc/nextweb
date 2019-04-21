/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const siteConfig = {
  title: 'NextWeb.js', // Title for your website.
  tagline: 'Docs for NextWeb.js',

  url: 'https://suranartnc.github.io', // Your website URL
  baseUrl: '/nextweb/', // Base URL for your project */
  projectName: 'nextweb',
  organizationName: 'suranartnc',

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {
      doc: 'getting-started/getting-started',
      label: 'Docs',
    },
    {
      href: 'https://github.com/suranartnc/nextweb/',
      label: 'GitHub',
    },
  ],

  /* path to images for header/footer */
  headerIcon: 'img/favicon/favicon.ico',
  footerIcon: 'img/favicon/favicon.ico',
  favicon: 'img/favicon/favicon.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#20232a',
    secondaryColor: '#555555',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  // copyright: `Copyright © ${new Date().getFullYear()} Your Name or Your Company Name`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/favicon/favicon.ico',
  twitterImage: 'img/favicon/favicon.ico',

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
}

module.exports = siteConfig
