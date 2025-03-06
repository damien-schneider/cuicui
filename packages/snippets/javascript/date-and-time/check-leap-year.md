---
title: Check Leap Year
description: Determines if a given year is a leap year.
author: axorax
tags: date,leap-year
---

```js
const isLeapYear = (year) => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

// Usage:
isLeapYear(2024); // Returns: true
isLeapYear(2023); // Returns: false
```
