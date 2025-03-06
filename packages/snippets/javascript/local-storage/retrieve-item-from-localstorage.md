---
title: Retrieve Item from localStorage
description: Retrieves a value from localStorage by key and parses it.
author: dostonnabotov
tags: localStorage,storage
---

```js
const getFromLocalStorage = (key) => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

// Usage:
getFromLocalStorage('user'); // Returns: { name: 'John', age: 30 }
```
