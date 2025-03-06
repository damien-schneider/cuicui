---
title: Flatten Nested Object
description: Flattens a nested object into a single-level object with dot notation for keys.
author: axorax
tags: object,flatten
---

```js
function flattenObject(obj, prefix = '') {
  return Object.keys(obj).reduce((acc, key) => {
    const fullPath = prefix ? `${prefix}.${key}` : key;
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      Object.assign(acc, flattenObject(obj[key], fullPath));
    } else {
      acc[fullPath] = obj[key];
    }
    return acc;
  }, {});
}

// Usage:
const nestedObj = { a: { b: { c: 1 }, d: 2 }, e: 3 };
flattenObject(nestedObj); // Returns: { 'a.b.c': 1, 'a.d': 2, e: 3 }
```
