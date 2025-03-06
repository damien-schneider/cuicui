---
title: Greatest Common Divisor
description: Calculates the largest positive integer that divides each of the integers without leaving a remainder. Useful for calculating aspect ratios.
author: JanluOfficial
tags: math,division,number-theory,algebra
---

```js
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Usage:
gcd(1920, 1080); // Returns:    120
gcd(1920, 1200); // Returns:    240
gcd(5,12);       // Returns:      1
```