---
title: Start of the Day
description: Returns the start of the day (midnight) for a given date.
author: axorax
tags: date,start-of-day
---

```js
const startOfDay = (date) => new Date(date.setHours(0, 0, 0, 0));

// Usage:
const today = new Date();
startOfDay(today); // Returns: Date object for midnight
```
