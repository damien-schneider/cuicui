---
title: Convert String to Pascal Case
description: Converts a given string into Pascal Case.
author: aumirza
tags: string,case,pascalCase
---

```js
function toPascalCase(str) {
  return str.replace(/\b\w/g, (s) => s.toUpperCase()).replace(/\W+(.)/g, (match, chr) => chr.toUpperCase());
}

// Usage:
toPascalCase('hello world test'); // Returns: 'HelloWorldTest'
```
