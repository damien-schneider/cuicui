---
title: Least common multiple
description: Computes the least common multiple (LCM) of two numbers 𝑎 and b. The LCM is the smallest positive integer that is divisible by both a and b.
author: JanluOfficial
tags: math,number-theory,algebra
---

```js
function lcm(a, b) {
    function gcd(x, y) {
        while (y !== 0) {
            const temp = y;
            y = x % y;
            x = temp;
        }
        return Math.abs(x);
    }
    return Math.abs(a * b) / gcd(a, b);
}

// Usage:
lcm(12,16); // Returns:    48
lcm(8,20);  // Returns:    40
lcm(16,17); // Returns:   272
```