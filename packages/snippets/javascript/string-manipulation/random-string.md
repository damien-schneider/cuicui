---
title: Random string
description: Generates a random string of characters of a certain length
author: kruimol
tags: function,random
---

```js
function makeid(length, characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789') {
  return Array.from({ length }, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
}

makeid(3); // Returns: gDs (Random)
makeid(5, "1234" /* (optional) */); // Returns: "35453" (Random)
```
