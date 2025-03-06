---
title: Convert String to Camel Case
description: Converts a given string into camelCase.
author: aumirza
tags: string,case,camelCase
---

```js
function toCamelCase(str) {
  return str.replace(/\W+(.)/g, (match, chr) => chr.toUpperCase());
}

// Usage:
toCamelCase('hello world test'); // Returns: 'helloWorldTest'
```
