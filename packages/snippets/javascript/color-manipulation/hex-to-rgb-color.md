---
title: Hex to RGB Color
description: Converts hexadecimal color code to RGB color values.
author: pvictordev
tags: color,conversion
---

```js
function hexToRgb(hex) {
  let sanitizedHex = hex.startsWith("#") ? hex.slice(1) : hex;

  if (sanitizedHex.length === 3) {
    sanitizedHex = [...sanitizedHex].map((char) => char + char).join("");
  }

  const bigint = parseInt(sanitizedHex, 16);

  return {
    r: (bigint >> 16) & 0xff, 
    g: (bigint >> 8) & 0xff,  
    b: bigint & 0xff,       
  };
}

// Usage:
console.log(hexToRgb("#ff5733")); // { r: 255, g: 87, b: 51 }
console.log(hexToRgb("#ffff")); // { r: 0, g: 255, b: 255 }
```