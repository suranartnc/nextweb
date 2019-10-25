---
id: grids
title: Grids
---

**NextWeb.js** comes with simple grid from [**Rebass**](https://github.com/rebassjs/grid).

```javascript
import { Flex, Box } from '@grid'

function MyComponent() {
  return (
    <Flex>
      <Box width={1/2}>
        Half width
      </Box>
      <Box width={1/2}>
        Half width
      </Box>
    </Flex>
  )
}
```

As you can see, Rebass Grid allow us to specify how wide our boxes are using the aspect ratio instead of number of columns. That's mean you are no longer sticked to a specific column-based.

## Responsive Grids

```javascript
import { Flex, Box } from '@grid'

function MyComponent() {
  return (
    <Flex>
      <Box width={[1, 2 / 3]}>
        Main
      </Box>
      <Box width={[1, 1 / 3]}>
        Aside
      </Box>
    </Flex>
  )
}
```

The first item of the array you passed to ```width``` prop will be used if the viewport size is smaller than the first breakpoint while each rest item will be used if its breakpoint is matched.

For more information, please visit rebass grid's [**documentation**](https://github.com/rebassjs/grid).

## Breakpoints

The good news is you can defines your own breakpoints.

```javascript
// src/lib/styles/helpers.js

export const breakpoints = {
  md: '48em', // 768px
  lg: '60em', // 960px
  xl: '80em', // 1280px
}

...
```

Actually, the name of each breakpoint can be anything. But please remember that you will use these names later to refer to each breakpoint. And if you think the default breakpoints are not enough, you can add more.