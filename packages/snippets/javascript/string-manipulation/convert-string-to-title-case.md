---
title: Convert String to Title Case
description: Converts a given string into Title Case.
author: aumirza
tags: string,case,titleCase
---

```js
function toTitleCase(str) {
  return str.toLowerCase().replace(/\b\w/g, (s) => s.toUpperCase());
}

// Usage:
toTitleCase('hello world test'); // Returns: 'Hello World Test'
```
