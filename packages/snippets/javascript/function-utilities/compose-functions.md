---
title: Compose Functions
description: Composes multiple functions into a single function, where the output of one function becomes the input of the next.
author: axorax
tags: function,compose
---

```js
const compose = (...funcs) => (initialValue) => {
  return funcs.reduce((acc, func) => func(acc), initialValue);
};

// Usage:
const add2 = (x) => x + 2;
const multiply3 = (x) => x * 3;
const composed = compose(multiply3, add2);
composed(5); // Returns: 17 ((5 * 3) + 2)
```
