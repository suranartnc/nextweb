---
id: icons
title: Icons
---

## Preparation

You have to choose which icons you want to use in this application.

```javascript
// src/lib/styles/fontAwesome.js

import { library, config } from '@fortawesome/fontawesome-svg-core'

// Import only icons you want to use.
// Icon names are camel case and prefixed with "fa".
import { faSearch, faHome } from '@fortawesome/free-solid-svg-icons'

config.autoAddCss = false

// Add them to the library
library.add(faSearch, faHome)
```
And make sure you've imported ```fontAwesome.js```

```javascript
// src/lib/styles/index.js

import './fontAwesome'

...

```

You may think choosing icons may take your time, but this process will make your application bundle very small because it will never load unused icons.



Please note that **NextWeb.js** uses [**Font Awesome**](https://fontawesome.com/) and you can see all available fonts [**here**](https://fontawesome.com/icons?d=gallery&s=solid&m=free).

## Usage

```javascript
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

function MyIcons() {
  return (
    <div>
      <Icon icon="home" />
      <Icon icon="search" />
    </div>
  )
}   
```

As you can see, the icon prop receives icon name without ```fa``` prefix.