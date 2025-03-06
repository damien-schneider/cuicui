---
title: Convert Number to Currency
description: Converts a number to a currency format with a specific locale.
author: axorax
tags: number,currency
---

```js
const convertToCurrency = (num, locale = 'en-US', currency = 'USD') => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency
  }).format(num);
};

// Usage:
convertToCurrency(1234567.89); // Returns: '$1,234,567.89'
convertToCurrency(987654.32, 'de-DE', 'EUR'); // Returns: '987.654,32 €'
```
