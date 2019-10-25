---
id: style-helpers
title: Style Helpers
---

## Media Queries

```media``` helper allows you to use CSS media queries with object styles.

```javascript
import { media } from '@lib/styles'

function MyComponent() {
  return (
    <div css={{
        display: 'none',
        [media('md')]: {
          display: 'block',
        },
      }}>
      <Sidebar />
    </div>
  )
}
```

Please note that all available arguments for ```media()``` are the breakpoints you have defined.

```javascript
// src/lib/styles/helpers.js

export const breakpoints = {
  md: '48em', // 768px
  lg: '60em', // 960px
  xl: '80em', // 1280px
}

...
```

## UI Switcher

These 2 helpers help us do conditional rendering based on some conditions. The value of ```narrow``` and ```wide``` prop is a react element you want to render for that situation.

### Viewport Size

This helper will render the target component that meets the condition in terms of viewport size. 

```javascript
import { Responsive } from '@lib/styles'

function MyComponent() {
  return (
    <div>
      <Responsive
        breakpoint="md"
        narrow={null}
        wide={<Sidebar />}
      />
    </div>
  )
}
```

Please note that the value of the ```breakpoint``` prop must be one of the predefined breakpoints.

### Device

This helper will render the target component that meets the condition in terms of device type. 

```javascript
import { Adaptive } from '@lib/styles'

function MyComponent() {
  return (
    <div>
      <Adaptive narrow={null} wide={<Sidebar />} />
    </div>
  )
}
```

Please note that the value of the ```narrow``` prop is for mobile while the value of the ```wide``` prop is for tablet and desktop.
