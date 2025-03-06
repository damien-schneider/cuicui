---
title: Convert to Scientific Notation
description: Converts a number to scientific notation.
author: axorax
tags: number,scientific
---

```js
const toScientificNotation = (num) => {
  if (isNaN(num)) {
    throw new Error('Input must be a number');
  }
  if (num === 0) {
    return '0e+0';
  }
  const exponent = Math.floor(Math.log10(Math.abs(num)));
  const mantissa = num / Math.pow(10, exponent);
  return `${mantissa.toFixed(2)}e${exponent >= 0 ? '+' : ''}${exponent}`;
};

// Usage:
toScientificNotation(12345); // Returns: '1.23e+4'
toScientificNotation(0.0005678); // Returns: '5.68e-4'
toScientificNotation(1000); // Returns: '1.00e+3'
toScientificNotation(0); // Returns: '0e+0'
toScientificNotation(-54321); // Returns: '-5.43e+4'
```
