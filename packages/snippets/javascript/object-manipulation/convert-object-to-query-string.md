---
title: Convert Object to Query String
description: Converts an object to a query string for use in URLs.
author: axorax
tags: object,query string,url
---

```js
function toQueryString(obj) {
  return Object.entries(obj)
    .map(([key, value]) => encodeURIComponent(key) + '=' + encodeURIComponent(value))
    .join('&');
}

// Usage:
const params = { search: 'test', page: 1 };
toQueryString(params); // Returns: 'search=test&page=1'
```
