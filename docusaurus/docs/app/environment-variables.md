---
id: environment-variables
title: Environment Variables
---

All environment varialbes must be defined in ```.env``` file at the root of the project. You can use ```.env.default``` file as a starter.

***Note:*** *The ```.env``` file is ignored from the repository.*

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

***Note:*** *You can leave ```ASSET_PREFIX``` blank in local environment.*
