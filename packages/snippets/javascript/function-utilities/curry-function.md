---
title: Curry Function
description: Transforms a function into its curried form.
author: axorax
tags: curry,function
---

```js
const curry = (func) => {
  const curried = (...args) => {
    if (args.length >= func.length) {
      return func(...args);
    }
    return (...nextArgs) => curried(...args, ...nextArgs);
  };
  return curried;
};

// Usage:
const add = (a, b, c) => a + b + c;
const curriedAdd = curry(add);
curriedAdd(1)(2)(3); // Returns: 6
curriedAdd(1, 2)(3); // Returns: 6
```
