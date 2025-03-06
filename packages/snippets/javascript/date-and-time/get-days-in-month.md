---
title: Get Days in Month
description: Calculates the number of days in a specific month of a given year.
author: axorax
tags: date,days-in-month
---

```js
const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

// Usage:
getDaysInMonth(2024, 1); // Returns: 29 (February in a leap year)
getDaysInMonth(2023, 1); // Returns: 28
```
