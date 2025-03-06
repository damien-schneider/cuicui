---
title: Capitalize String
description: Capitalizes the first letter of a string.
author: dostonnabotov
tags: string,capitalize
---

```js
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Usage:
capitalize('hello'); // Returns: 'Hello'
```
