---
id: module-alias
title: Module Alias
---

We use [```babel-plugin-module-resolver```](https://github.com/tleunen/babel-plugin-module-resolver) package to create module aliases to avoid ```../../../../```. However, we can still use ```./``` or ```../``` in the case of referring file in the same module.

Alias | Path
----- | ----
@components | src/components
@common | src/components/_common
@link | src/components/_common/Link
@lib | src/lib
@features | src/features
@router | src/router
@grid | @rebass/grid/emotion

## Examples

## Add more Aliases

```json
// .babelrc

{
  ...

  "plugins": [
    ...

    [
      "module-resolver", {
        "alias": {
          "@components": "./src/components",
          "@common": "./src/components/_common",
          "@link": "./src/components/_common/Link",
          "@lib": "./src/lib",
          "@features": "./src/features",
          "@router": "./src/router",
          "@grid": "@rebass/grid/emotion",

          ... Add more aliases here ...
        }
      }
    ]
  ]
}
```