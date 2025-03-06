---
title: Debounce Function
description: Delays a function execution until after a specified time.
author: dostonnabotov
tags: debounce,performance
---

```js
const debounce = (func, delay) => {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
};

// Usage:
window.addEventListener(
  'resize',
  debounce(() => console.log('Resized!'), 500), // Will only output after resizing has stopped for 500ms
);
```
