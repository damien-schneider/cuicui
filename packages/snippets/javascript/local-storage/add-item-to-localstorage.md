---
title: Add Item to localStorage
description: Stores a value in localStorage under the given key.
author: dostonnabotov
tags: localStorage,storage
---

```js
const addToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

// Usage:
addToLocalStorage('user', { name: 'John', age: 30 });
```
