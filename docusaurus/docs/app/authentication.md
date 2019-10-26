---
id: authentication
title: Authentication
---

One of the most frequently asked question is about authentication, so **NextWeb.js** provides it out of the box.

## How It Works
Authentication in **NextWeb.js** is consisted of 3 parts:

### 1. userContext

**NextWeb.js** stores authentication data in ```userContext``` and to make it accessible by every components, **NextWeb.js** wraps the app component with a higher-order component called ```withAuth()```.

```javascript
// src/lib/auth/index.js

export function withAuth(PageComponent) {
  function EnhancedPageComponent(props) {
    const userData = useAuth()

    return (
      <userContext.Provider value={userData}>
        <PageComponent {...props} />
      </userContext.Provider>
    )
  }

  ...

  return EnhancedPageComponent
}
```
Please note that authentication data comes from a custom hook called ```useAuth()```.

### 2. useAuth()

A custom hook used to provide data for ```userContext```.

```javascript
// src/lib/auth/useAuth.js

export default function useAuth() {
  const [userData, setUserData] = useState(undefined)

  useEffect(() => {
    // Wait for an authentication event to update userData
  }, [])

  return userData
}
```


Fortunately, **NextWeb.js** comes with buit-in ```useAuth()``` for 2 popular types of authentication service.

Type | Example
------------ | -------------
Token-based | src/lib/auth/useAuth.js
Firebase | src/lib/firebase/useAuth.js

So you do not have to write any lines of code, just import the right one.

### 3. signIn()

A function that used to call authentication API and triggers ```useEffects()``` in ```useAuth()```. Here are some examples.

#### Token-based Authentication

```javascript
function signIn(email, password) {
  return postAPI({
    apiUrl: process.env.HOST,
    path: '/api/signIn',
    data: {
      email,
      password,
    },
  }).then(token => {
    location.href = `/?token=${token}`
  })
}
```

#### Firebase Authentication

```javascript
function signIn(email, password) {
  firebase.auth().signInWithEmailAndPassword(email, password)
}
```
