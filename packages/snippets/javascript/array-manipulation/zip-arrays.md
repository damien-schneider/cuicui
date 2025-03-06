---
title: Zip Arrays
description: Combines two arrays by pairing corresponding elements from each array.
author: Swaraj-Singh-30
tags: array,map
---

```js
const zip = (arr1, arr2) => arr1.map((value, index) => [value, arr2[index]]);

// Usage:
const arr1 = ['a', 'b', 'c'];
const arr2 = [1, 2, 3];
console.log(zip(arr1, arr2)); // Output: [['a', 1], ['b', 2], ['c', 3]]
```
