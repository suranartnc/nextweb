---
id: create-a-new-page
title: Create a New Page
---

First, create a new react component to represent your page. In this case, we will create a very simple page called ```My Page```.

```javascript
// src/components/mypage/index.js

import React from 'react'
import withPage from '@lib/page/withPage'

function MyPage() {
  return <div>My Page</div>
}

export default withPage()(MyPage)

```
***Note:*** *Please remember that every react components should be placed inside ```src/components``` directory.*

Did you see a higher-order component called ```withPage()``` ? Is it required ? Yes, because it will make your component becomes a page in ```NextWeb.js```.

After you created your page component, you have to register it to ```Next.js```. Just create a new file in ```src/pages``` add put the following code:

```javascript
// src/pages/mypage.js

import MyPage from '@components/mypage'
export default MyPage
```
You will see that this file do nothing but import your page component and then export it as a ```Next.js``` compatible page.