---
title: Pad String on Both Sides
description: Pads a string on both sides with a specified character until it reaches the desired length.
author: axorax
tags: string,pad,manipulation
---

```js
function padString(str, length, char = ' ') {
  const totalPad = length - str.length;
  const padStart = Math.floor(totalPad / 2);
  const padEnd = totalPad - padStart;
  return char.repeat(padStart) + str + char.repeat(padEnd);
}

// Usage:
padString('hello', 10, '*'); // Returns: '**hello***'
```
