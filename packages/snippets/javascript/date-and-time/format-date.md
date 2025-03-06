---
title: Format Date
description: Formats a date in 'YYYY-MM-DD' format.
author: dostonnabotov
tags: date,format
---

```js
const formatDate = (date) => date.toISOString().split('T')[0];

// Usage:
formatDate(new Date(2024, 11, 10)); // Returns: '2024-12-10'
```
