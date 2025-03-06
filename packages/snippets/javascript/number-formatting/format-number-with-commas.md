---
title: Format Number with Commas
description: Formats a number with commas for better readability (e.g., 1000 -> 1,000).
author: axorax
tags: number,format
---

```js
const formatNumberWithCommas = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

// Usage:
formatNumberWithCommas(1000); // Returns: '1,000'
formatNumberWithCommas(1234567); // Returns: '1,234,567'
formatNumberWithCommas(987654321); // Returns: '987,654,321'
```
