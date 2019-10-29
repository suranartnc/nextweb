---
id: folder-structure
title: Folder Structure
---

The main folder structure of NextWeb.js looks like this:

```bash
my-app/
  src/
    components/
    features/
    lib/
    pages/
    router/
    public/
    next.config.js
    server.js
  .babelrc
  .env
````

```src/``` is the directory where you put your source code. And for lare-scale maintainable web apps, we recommend you to separate your code into the following subdirectories.

Name | Description
------------ | -------------
components/ | Keep react components for pages and section
features/ | Keep business logic separated by entities or modules
lib/ | Keep built-in utilities separated by modules
pages/ | Keep pages for Next.js
router/ | Keep routes and utilities for routing
public/ | Keep public files

***Note:*** *Adding more subdirectories in   ```src/``` is **not** recommended unless you know what you are doing.*

In other words, NextWeb.js is about the concept that separate code based on module and provide some useful utilities in ```src/lib``` directory. The rest code in just recipes that use those utilities!