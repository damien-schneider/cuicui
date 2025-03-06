---
title: Dot Product
description: Computes the dot product of two vectors, which is the sum of the products of corresponding elements.
author: JanluOfficial
tags: math,vector-algebra
---

```js
function dotProduct(a, b) {
    if (a.length !== b.length) {
        throw new Error('Vectors must be of the same length');
    }

    return a.reduce((sum, value, index) => sum + value * b[index], 0);
}

// Usage:
dotProduct([1, 2, 3], [4, 5, 6]); // Returns: 32
```