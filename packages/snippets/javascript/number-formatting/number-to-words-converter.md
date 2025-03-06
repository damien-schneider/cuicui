---
title: Number to Words Converter
description: Converts a number to its word representation in English.
author: axorax
tags: number,words
---

```js
const numberToWords = (num) => {
  const below20 = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  const above1000 = ['Hundred', 'Thousand', 'Million', 'Billion'];
  if (num < 20) return below20[num];
  let words = '';
  for (let i = 0; num > 0; i++) {
    if (i > 0 && num % 1000 !== 0) words = above1000[i] + ' ' + words;
    if (num % 100 >= 20) {
      words = tens[Math.floor(num / 10)] + ' ' + words;
      num %= 10;
    }
    if (num < 20) words = below20[num] + ' ' + words;
    num = Math.floor(num / 100);
  }
  return words.trim();
};

// Usage:
numberToWords(123); // Returns: 'One Hundred Twenty Three'
numberToWords(2045); // Returns: 'Two Thousand Forty Five'
```
