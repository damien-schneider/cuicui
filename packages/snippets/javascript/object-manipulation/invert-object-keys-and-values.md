---
title: Invert Object Keys and Values
description: Creates a new object by swapping keys and values of the given object.
author: axorax
tags: object,invert
---

```js
function invertObject(obj) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [value, key])
  );
}

// Usage:
const obj = { a: 1, b: 2, c: 3 };
invertObject(obj); // Returns: { '1': 'a', '2': 'b', '3': 'c' }
```
