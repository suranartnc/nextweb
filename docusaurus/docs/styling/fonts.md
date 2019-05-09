---
id: fonts
title: Fonts
---

There are 2 types of font loading.

## Internal Fonts

If you have some font files, just put them inside the ```fonts``` folder and groupped by font family like this:

```bash
src/
  lib/
    styles/
      sass/
        fonts/
          open-sans/
            opensans-regular-webfont.woff
            opensans-regular-webfont.woff2
        _fonts.scss
        app.scss
```

Then you add @font-face rules at ```_fonts.scss``` file.

```scss
// src/lib/styles/sass/_fonts_.scss

@font-face {
  font-family: 'Open Sans';
  src: url('./fonts/open-sans/opensans-regular-webfont.woff2') format('woff2'),
       url('./fonts/open-sans/opensans-regular-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
```

And make sure that ```app.scss``` imports ```_fonts.scss```.

```scss
// src/lib/styles/sass/app.scss

...

@import "./fonts"
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

