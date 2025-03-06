---
title: RGB to HSL Color
description: Converts RGB color values to HSL color values.
author: pvictordev
tags: color,conversion
---

```js
function rgbToHsl(r, g, b) {
  [r, g, b] = [r, g, b].map((v) => v / 255);

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;

  const l = (max + min) / 2;

  if (delta === 0) return { h: 0, s: 0, l: Math.round(l * 100) };

  const s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);

  const h = 
    max === r ? ((g - b) / delta + (g < b ? 6 : 0)) :
    max === g ? (b - r) / delta + 2 :
                (r - g) / delta + 4;

  return {
    h: Math.round(h * 60), 
    s: Math.round(s * 100),
    l: Math.round(l * 100), 
  };
}

// Usage:
console.log(rgbToHsl(255, 87, 51)); // { h: 14, s: 100, l: 60 }
console.log(rgbToHsl(255, 255, 255)); // { h: 0, s: 0, l: 100 }
``` 