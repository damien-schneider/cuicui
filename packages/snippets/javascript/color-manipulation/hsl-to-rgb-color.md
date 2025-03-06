---
title: HSL to RGB Color
description: Converts HSL color values to RGB color values.
author: pvictordev
tags: color,conversion
---

```js
function hslToRgb(h, s, l) {
  s /= 100;
  l /= 100;
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs((h / 60) % 2 - 1));
  const m = l - c / 2;

  const [r, g, b] = 
    h < 60  ? [c, x, 0] :
    h < 120 ? [x, c, 0] :
    h < 180 ? [0, c, x] :
    h < 240 ? [0, x, c] :
    h < 300 ? [x, 0, c] :
              [c, 0, x];

  return {
    r: Math.round((r + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((b + m) * 255),
  };
}

// Usage:
console.log(hslToRgb(14, 100, 60)); // { r: 255, g: 87, b: 51 }
console.log(hslToRgb(0, 0, 100)); // { r: 255, g: 255, b: 255 }
``` 