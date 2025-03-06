---
title: Filter Object
description: Filter out entries in an object where the value is falsy, including empty strings, empty objects, null, and undefined.
author: realvishalrana
tags: object,filter
---

```js
export const filterObject = (object = {}) =>
  Object.fromEntries(
    Object.entries(object)
      .filter(([key, value]) => value !== null && value !== undefined && value !== '' && (typeof value !== 'object' || Object.keys(value).length > 0))
  );

// Usage:
const obj1 = { a: 1, b: null, c: undefined, d: 4, e: '', f: {} };
filterObject(obj1); // Returns: { a: 1, d: 4 }

const obj2 = { x: 0, y: false, z: 'Hello', w: [] };
filterObject(obj2); // Returns: { z: 'Hello' }

const obj3 = { name: 'John', age: null, address: { city: 'New York' }, phone: '' };
filterObject(obj3); // Returns: { name: 'John', address: { city: 'New York' } }

const obj4 = { a: 0, b: '', c: false, d: {}, e: 'Valid' };
filterObject(obj4); // Returns: { e: 'Valid' }
```
