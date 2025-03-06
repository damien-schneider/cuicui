---
title: Remove Falsy Values
description: Removes falsy values from an array.
author: mubasshir
tags: array,falsy,filter
---

```js
const removeFalsy = (arr) => arr.filter(Boolean);

// Usage:
const array = [0, 1, false, 2, "", 3, null];
removeFalsy(array); // Returns: [1, 2, 3]
```
