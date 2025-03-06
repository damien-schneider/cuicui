---
title: Unique By Key
description: Filters an array of objects to only include unique objects by a specified key.
author: realvishalrana
tags: array,unique
---

```js
const uniqueByKey = (key, arr) =>
  arr.filter((obj, index, self) => index === self.findIndex((t) => t?.[key] === obj?.[key]));

// Usage:
const arr = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 1, name: 'John' }
];
uniqueByKey('id', arr); // Returns: [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }]
```
