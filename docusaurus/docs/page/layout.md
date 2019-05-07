---
id: layout
title: Layout
---

Each page in an application may have some common header, footer or navigation. That's why **NextWeb.js** prepare a simple layout system for you.

Just define the layout component here:

```javascript
// src/components/_layouts/main/index.js

import Navigation from './Navigation'

function MainLayout({ children }) {
  return (
    <div>
      <Navigation />
      <main>{children}</main>
    </div>
  )
}
```

In this case, we add ```<Navigation />``` besides the ```children``` which refers to the rendered page.

## Disable Layout

However, some pages may not need a layout. The solution is easy, just set the ```layout``` option for ```withPage()``` to ```false```.

```javascript
// src/components/mypage/index.js

import React from 'react'
import withPage from '@lib/page/withPage'

function MyPage() {
  return <div>My Page</div>
}

export default withPage({ layout: false })(MyPage)
```

## Multiple Layout

If your app is more complex or a single layout is not enough, you can add alternative layouts.

```bash
src/
  components/
    _layouts/
      main/
        index.js    // Main layout
      custom-1/
        index.js    // Custom layout 1
      custom-2/
        index.js    // Custom layout 2
````

And you have to edit ```withLayout.js```:

```javascript
// src/lib/page/withLayout.js

import MainLayout from '@components/_layouts/main'
import CustomLayout1 from '@components/_layouts/custom-1'
import CustomLayout2 from '@components/_layouts/custom-2'

export default (hasLayout = 'main') => PageComponent => {
  function EnhancedPageComponent(props) {
    if (!hasLayout) {
      return <PageComponent {...props} />
    }

    if (hasLayout === 'custom-1') {
      <CustomLayout1>
        <PageComponent {...props} />
      </CustomLayout1>
    }

    if (hasLayout === 'custom-2') {
      <CustomLayout2>
        <PageComponent {...props} />
      </CustomLayout2>
    }

    return (
      <MainLayout>
        <PageComponent {...props} />
      </MainLayout>
    )
  }

  ...

  return EnhancedPageComponent
}
```

Now choosing a layout is super easy:
```javascript
// src/components/mypage/index.js

import React from 'react'
import withPage from '@lib/page/withPage'

function MyPage() {
  return <div>My Page</div>
}

export default withPage({ layout: 'custom-2' })(MyPage)
```
