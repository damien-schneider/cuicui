---
title: Get Day of the Year
description: Calculates the day of the year (1-365 or 1-366 for leap years) for a given date.
author: axorax
tags: date,day-of-year
---

```js
const getDayOfYear = (date) => {
  const startOfYear = new Date(date.getFullYear(), 0, 0);
  const diff = date - startOfYear + (startOfYear.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000;
  return Math.floor(diff / (1000 * 60 * 60 * 24));
};

// Usage:
getDayOfYear(new Date('2024-12-31')) // Returns: 366 (Leap year)
```
