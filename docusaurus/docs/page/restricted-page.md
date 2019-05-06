---
id: restricted-page
title: Restricted Pages
---

If a page has some private information about the logged in user, you may have to restrict access to this page. Just set the ```restricted``` option for ```withPage()``` to ```true```.

```javascript
// src/components/account/index.js

import React from 'react'
import withPage from '@lib/page/withPage'

function AccountPage() {
  return <div>Some secret stuffs</div>
}

export default withPage({ restricted: true })(AccountPage)
```

Now this page is available only for logged in users while the others will be redirected to the home page.
