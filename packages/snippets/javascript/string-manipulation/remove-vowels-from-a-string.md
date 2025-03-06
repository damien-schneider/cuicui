---
title: Remove Vowels from a String
description: Removes all vowels from a given string.
author: axorax
tags: string,remove,vowels
---

```js
function removeVowels(str) {
  return str.replace(/[aeiouAEIOU]/g, '');
}

// Usage:
removeVowels('Hello World'); // Returns: 'Hll Wrld'
```
