---
title: Merge Objects Deeply
description: Deeply merges two or more objects, including nested properties.
author: axorax
tags: object,merge,deep
---

```js
function deepMerge(...objects) {
  return objects.reduce((acc, obj) => {
    Object.keys(obj).forEach(key => {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        acc[key] = deepMerge(acc[key] || {}, obj[key]);
      } else {
        acc[key] = obj[key];
      }
    });
    return acc;
  }, {});
}

// Usage:
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { b: { d: 3 }, e: 4 };
deepMerge(obj1, obj2); // Returns: { a: 1, b: { c: 2, d: 3 }, e: 4 }
```
