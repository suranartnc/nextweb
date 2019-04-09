import React, { Component } from 'react'
import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
}

export default function withFirebase(Page) {
  class PageWithFirebase extends Component {
    constructor(props) {
      super(props)

      if (process.browser) {
        firebase.initializeApp(firebaseConfig)
      }
    }

    render() {
      return <Page {...this.props} />
    }
  }

  PageWithFirebase.getInitialProps = async function(appContext) {
    let appProps = {}
    if (typeof Page.getInitialProps === 'function') {
      appProps = await Page.getInitialProps(appContext)
    }
    return appProps
  }

  return PageWithFirebase
}
