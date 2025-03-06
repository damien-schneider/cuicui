---
title: RGB to Hex Color
description: Converts RGB color values to hexadecimal color code.
author: jjcantu
tags: color,conversion
---

```js
function rgbToHex(r, g, b) {
  const toHex = (n) => {
    const hex = n.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  return "#" + toHex(r) + toHex(g) + toHex(b);
}

// Usage:
console.log(rgbToHex(255, 128, 0)); // Output: "#ff8000"
console.log(rgbToHex(0, 255, 0)); // Output: "#00ff00"
``` 