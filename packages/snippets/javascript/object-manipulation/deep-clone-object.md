---
title: Deep Clone Object
description: Creates a deep copy of an object or array without reference.
author: jjcantu
tags: object,clone
---

```js
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  
  const clone = Array.isArray(obj) ? [] : {};
  
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clone[key] = deepClone(obj[key]);
    }
  }
  
  return clone;
}

// Usage:
const original = { a: 1, b: { c: 2 }, d: [1, 2, 3] };
const cloned = deepClone(original);
console.log(cloned); // Output: 'original' but cloned
``` 