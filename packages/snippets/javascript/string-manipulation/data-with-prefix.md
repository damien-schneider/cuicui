---
title: Data with Prefix
description: Adds a prefix and postfix to data, with a fallback value.
author: realvishalrana
tags: data,prefix,postfix,format
---

```js
const dataWithPrefix = (data, fallback = '-', prefix = '', postfix = '') => {
  return data ? `${prefix}${data}${postfix}` : fallback;
};

// Usage:
dataWithPrefix('123', '-', '(', ')'); // Returns: '(123)'
dataWithPrefix('', '-', '(', ')'); // Returns: '-'
dataWithPrefix('Hello', 'N/A', 'Mr. ', ''); // Returns: 'Mr. Hello'
dataWithPrefix(null, 'N/A', 'Mr. ', ''); // Returns: 'N/A'
```
