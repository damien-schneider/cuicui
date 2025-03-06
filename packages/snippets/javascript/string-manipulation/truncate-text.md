---
title: Truncate Text
description: Truncates the text to a maximum length and appends '...' if the text exceeds the maximum length.
author: realvishalrana
tags: string,truncate,text
---

```js
const truncateText = (text = '', maxLength = 50) => {
  return `${text.slice(0, maxLength)}${text.length >= maxLength ? '...' : ''}`;
};

// Usage:
const title = "Hello, World! This is a Test.";
truncateText(title); // Returns: 'Hello, World! This is a Test.'
truncateText(title, 10); // Returns: 'Hello, Wor...'
```
