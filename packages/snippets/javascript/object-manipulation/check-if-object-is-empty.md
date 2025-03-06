---
title: Check if Object is Empty
description: Checks whether an object has no own enumerable properties.
author: axorax
tags: object,check,empty
---

```js
function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}

// Usage:
isEmptyObject({}); // Returns: true
isEmptyObject({ a: 1 }); // Returns: false
```
