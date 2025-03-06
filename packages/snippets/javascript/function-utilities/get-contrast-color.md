---
title: Get Contrast Color
description: Returns either black or white text color based on the brightness of the provided hex color.
author: yaya12085
tags: color,hex,contrast,brightness
---

```js
const getContrastColor = (hexColor) => {
  // Expand short hex color to full format
  if (hexColor.length === 4) {
    hexColor = `#${hexColor[1]}${hexColor[1]}${hexColor[2]}${hexColor[2]}${hexColor[3]}${hexColor[3]}`;
  }
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness >= 128 ? "#000000" : "#FFFFFF";
};

// Usage:
getContrastColor('#fff'); // Returns: #000000 (black)
getContrastColor('#123456'); // Returns: #FFFFFF (white)
getContrastColor('#ff6347'); // Returns: #000000 (black)
getContrastColor('#f4f'); // Returns: #000000 (black)
```
