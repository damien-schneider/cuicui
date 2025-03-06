---
title: Modular Inverse
description: Computes the modular multiplicative inverse of a number a under modulo m, which is the integer x such that (a*x) mod m=1.
author: JanluOfficial
tags: math,number-theory,algebra
---

```js
function modInverse(a, m) {
    function extendedGCD(a, b) {
        if (b === 0) {
            return { gcd: a, x: 1, y: 0 };
        }
        const { gcd, x: x1, y: y1 } = extendedGCD(b, a % b);
        const x = y1;
        const y = x1 - Math.floor(a / b) * y1;
        return { gcd, x, y };
    }

    const { gcd, x } = extendedGCD(a, m);

    if (gcd !== 1) {
        return null;
    }

    return (x % m + m) % m;
}

// Usage:
modInverse(3, 26);  // Returns: 9
modInverse(10, 17); // Returns: 12
modInverse(6, 9);   // Returns: null
```