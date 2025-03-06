---
title: Generate UUID
description: Generates a UUID (v4) string.
author: jjcantu
tags: uuid, generate, string
---

```js
function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

// Usage:
console.log(generateUUID()); // Output: "a1b2c3d4-e5f6-4g7h-8i9j-k0l1m2n3o4p5"
``` 