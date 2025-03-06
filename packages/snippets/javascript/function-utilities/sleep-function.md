---
title: Sleep Function
description: Waits for a specified amount of milliseconds before resolving.
author: 0xHouss
tags: javascript,sleep,delay,utility,promises
---

```js
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Usage:
console.log('Hello');
await sleep(2000); // Waits for 2 seconds
console.log('World!');
```
