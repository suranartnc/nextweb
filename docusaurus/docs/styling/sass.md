---
id: sass
title: Sass
---

**NextWeb.js** supports Sass out of the box. Just place all scss files inside ```src/lib/styles/sass``` folder and make sure that the filename of the entry point file is ```app.scss```.

```bash
src/
  lib/
    styles/
      sass/
        app.scss
        _module1.scss
        _module2.scss
        _module3.scss
```

```scss
// src/lib/styles/sass/app.scss

// 3rd party styles
@import "~normalize.css";
@import "node_modules/@fortawesome/fontawesome-svg-core/styles";

// Custom Styles
@import "module1";
@import "module2";
@import "module3";
```