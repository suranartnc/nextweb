---
id: environment-variables
title: Environment Variables
---

We use environment variables to store the app configuration. 


Variables | Example
------------ | -------------
PROTOCOL | http
HOST_NAME | localhost
PORT | 3000
API_URL | http://localhost:3001
ASSET_PREFIX | https://cdn.mydomain.com
GTM_CONTAINER_ID | GTM-1234567
FIREBASE_API_KEY | ADGFHIfjkhgdsGKHdjgkg-jhk_DSJGKJG
FIREBASE_AUTH_DOMAIN | my-app.firebaseapp.com
FIREBASE_DATABASE_URL | https://my-app.firebaseio.com
FIREBASE_PROJECT_ID | my-app
FIREBASE_STORAGE_BUCKET | my-app.appspot.com
FIREBASE_MESSAGING_SENDER_ID | 123456789012

***Note:*** *```ASSET_PREFIX``` can be blank in local environment.*

You can defined these variables in ```.env``` file at the root of the project. Please note that the ```.env``` file is ignored from the repository and you can use ```.env.default``` file as a starter.

