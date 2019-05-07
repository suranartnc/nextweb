---
id: authentication
title: Authentication
---

One of the most frequently asked question is about authentication, so **NextWeb.js** provides it out of the box. By default, we use authentication service from firebase to make it very simple.

## Firebase Authentication
Firebase Authentication allows users to sign in to your app using a variety of methods, including email address and password sign-in, and 3rd party providers such as Google Sign-in and Facebook Login.

Here is an example using email address and password sign-in method:

```javascript
function LoginPage({ RootStore }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = e => {
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email, password)
  }

  return (
    <form onSubmit={login}>
      <p>
        <label>
          Email:
          <input type="text" onChange={e => setEmail(e.target.value)} />
        </label>
      </p>
      <p>
        <label>
          Password:
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
      </p>
      <button>Log in</button>
    </form>
  )
}
```

Whenever authentication state changed, we have to save the new data to a context called ```userContext``` to make it accessible by every components. This is done by ```withAuth.js```.

```javascript
// src/lib/firebase/auth/withAuth

export const userContext = React.createContext(null)

const useAuth = () => {
  const [userData, setUserData] = useState(undefined)

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      setUserData(user)
    })

    return () => {
      unsubscribe()
    }
  }, [])

  return userData
}

function PageWithAuth(props) {
  const userData = useAuth()

  return (
    <userContext.Provider value={userData}>
      <Page {...props} />
    </userContext.Provider>
  )
}
```


## Custom Authentication Service

If you have your own authentication service, all you have to do is changing the following code:

### firebase.auth().signInWithEmailAndPassword
This method triggers a sign-in method. To use your custom service, use your api or whatever that signs a user in instead.

### firebase.auth().onAuthStateChanged(user => { setUserData(user) })
This event listener watches the authentication state. If it changed, we use ```setUserData``` to update the data of ```userContext```. To use your custom service, whenever the authentication state changed, just call ```setUserData``` with the new state.
