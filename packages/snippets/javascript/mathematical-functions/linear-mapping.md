---
title: Linear Mapping
description: remaps a value from one range to another
author: JasimAlrawie
tags: math,number-theory,algebra
---

```js
function linearMapping(value, minIn, maxIn, minOut, maxOut) {
    return (value - minIn) * (maxOut - minOut)/(maxIn - minIn) + minOut
}

// Usage:
linearMapping(value, 0, 1, 0, 255)    // remaps the value from (0,1) to (0,255)
linearMapping(value, 0, PI*2, 0, 360) // remaps the value from rad to deg
linearMapping(value, -1, 1, 1, 8)     // remaps the value from (-1,1) to (1,8)
```