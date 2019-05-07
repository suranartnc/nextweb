---
id: context
title: Context
---

Most data in our app should be placed in local state if possible. However, some data (e.g. locale preference, UI theme) are required by many components within an app. 

If we decide to keep those data in local state, we have to place them at the root component of our app so we can pass those data through the component tree but this has to be done manually at every component level.

The better way is using ```context``` which provides a way to pass data through the component tree without having to pass props down manually.

## Built-In Contexts
Fortunately, **NextWeb.js** comes with some useful built-in contexts that will make your life easier.

### User Agent
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
import { userAgentContext } from '@lib/userAgent'

function MyComponent() {
  const { isMobile } = useContext(userAgentContext)

  return (
    <div>
      { isMobile ? <MobileUI /> : <DesktopUI /> }
    </div>
  )
}
```

### Authentication Data

You can access authentication data of a user easily using this context:

```javascript
import React, { useContext } from 'react'
import { userContext } from '@lib/firebase/auth'

function MyComponent() {
  const userData = useContext(userContext)

  return (
    <div>
      {userData ? <DashboardPage /> : <LoginPage /> }
    </div>
  )
}
```

Please note that **NextWeb.js** comes with firebase authentication by default but you can change it to your own service without affects this context. All you have to do is to save authentication data from your service into ```userContext```.
