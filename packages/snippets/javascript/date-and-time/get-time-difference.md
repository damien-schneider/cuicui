---
title: Get Time Difference
description: Calculates the time difference in days between two dates.
author: dostonnabotov
tags: date,time-difference
---

```js
const getTimeDifference = (date1, date2) => {
  const diff = Math.abs(date2 - date1);
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
};

// Usage:
const date1 = new Date('2024-01-01');
const date2 = new Date('2024-12-31');
getTimeDifference(date1, date2); // Returns: 365
```
