---
id: environment-variables
title: Environment Variables
---

We use environment variables to store the app configuration. 


Variables | Example
------------ | -------------
HOST | http://localhost:3000
API_URL | http://localhost:3001
ASSET_PREFIX | &nbsp;
STATIC_PREFIX | /static
GTM_CONTAINER_ID | GTM-1234567

***Note:*** *```ASSET_PREFIX``` can be blank in local environment.*

You can defined these variables in ```.env``` file at the root of the project. Please note that the ```.env``` file is ignored from the repository and you can use ```.env.default``` file as a starter.

