---
title: Count Words in a String
description: Counts the number of words in a string.
author: axorax
tags: string,manipulation,word count,count
---

```js
function countWords(str) {
  return str.trim().split(/\s+/).length;
}

// Usage:
countWords('Hello world! This is a test.'); // Returns: 6
```
