---
title: Memoize Function
description: Caches the result of a function based on its arguments to improve performance.
author: axorax
tags: memoization,optimization
---

```js
const memoize = (func) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = func(...args);
    cache.set(key, result);
    return result;
  };
};

// Usage:
const factorial = memoize((n) => (n <= 1 ? 1 : n * factorial(n - 1)));
factorial(5); // Returns: 120
factorial(5); // Returns: 120 (retrieved from cache)
```
