---
id: icons
title: Icons
---

## Preparation

```javascript
import { library, config } from '@fortawesome/fontawesome-svg-core'

// Import only icons you want to use.
// Icon names are camel case and prefixed with "fa".
import { faSearch, faHome } from '@fortawesome/free-solid-svg-icons'

config.autoAddCss = false

// Add them to the library
library.add(faSearch, faHome)
```

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