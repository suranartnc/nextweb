---
id: context
title: Context
---

Most data in our app should be placed in local state if possible. However, some data (e.g. locale preference, UI theme) are required by many components within an app. 

If we decide to keep those data in local state, we have to place them at the root component of our app so we can pass those data through the component tree but this has to be done manually at every component level.

The better way is using ```context``` which provides a way to pass data through the component tree without having to pass props down manually.

## Built-In Contexts
Fortunately, **NextWeb.js** comes with some useful built-in contexts that will make your life easier and you can access them using react hooks.

### useUA()
There are some useful information **NextWeb.js** extracted from user agent:

Name | Description 
---- | -----------
isMobile | Is the device a mobile ?
isTablet | Is the device a tablet ?
isDesktop | Is the device a desktop ?
isIE | Is the browser of the device an Internet Explorer ?

For example:

```javascript
import React, { useContext } from 'react'
import { useUA } from '@lib/userAgent'

function MyComponent() {
  const { device: { isMobile } } = useUA()

  return (
    <div>
      { isMobile ? <MobileUI /> : <DesktopUI /> }
    </div>
  )
}
```

### useMember()

You can access authentication data of a user easily using this react hook:

```javascript
import React, { useContext } from 'react'
import { useMember } from '@lib/auth'

function MyComponent() {
  const { isAuthenticated } = useMember()

  return (
    <div>
      {isAuthenticated ? <DashboardPage /> : <LoginPage /> }
    </div>
  )
}
```
See more detail about authentication data in [**Authentication**](/nextweb/docs/app/authentication) section
