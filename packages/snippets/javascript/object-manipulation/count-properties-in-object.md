---
title: Count Properties in Object
description: Counts the number of own properties in an object.
author: axorax
tags: object,count,properties
---

```js
function countProperties(obj) {
  return Object.keys(obj).length;
}

// Usage:
const obj = { a: 1, b: 2, c: 3 };
countProperties(obj); // Returns: 3
```
