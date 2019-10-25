---
id: fonts
title: Fonts
---

There are 2 types of font loading.

## Internal Fonts

If you have some font files, just put them inside the ```fonts``` folder and groupped by font family like this:

```bash
src/
  static/
    fonts/
      open-sans/
        opensans-regular-webfont.woff
        opensans-regular-webfont.woff2
```

Then you add ```@font-face``` rules at ```fonts.css``` file.

```scss
// src/static/css/fonts_.css

@font-face {
  font-family: 'Open Sans';
  src: url('../fonts/open-sans/opensans-regular-webfont.woff2') format('woff2'),
       url('../fonts/open-sans/opensans-regular-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}
```

Now everything is ready, so let's add a css rule to see your font.

```javascript
// src/lib/styles/GlobalStyles.js 

const baseStyles = css`
  html,
  body {
    font-family: 'Open Sans', sans-serif;
    ...
  }
`
...
```


## External Fonts

If you want to use some external fonts such as fonts from Google, just write a few lines of config.


```javascript
// src/lib/font.js

export const config = {
  google: {
    families: ['Open Sans:400'],
  }
}

```

And add a css rule as usual.


```javascript
// src/lib/styles/GlobalStyles.js 

const baseStyles = css`
  html,
  body {
    font-family: 'Open Sans', sans-serif;
    ...
  }
`
...
```

Please note that **NextWeb.js** uses [**Web Font Loader**](https://github.com/typekit/webfontloader). More detail about the configuration is [**here**](https://github.com/typekit/webfontloader#google).