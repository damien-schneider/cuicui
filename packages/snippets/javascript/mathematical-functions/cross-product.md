---
title: Cross Product
description: Computes the cross product of two 3D vectors, which results in a vector perpendicular to both.
author: JanluOfficial
tags: math,vector-algebra
---

```js
function crossProduct(a, b) {
    if (a.length !== 3 || b.length !== 3) {
        throw new Error('Vectors must be 3-dimensional');
    }

    return [
        a[1] * b[2] - a[2] * b[1],
        a[2] * b[0] - a[0] * b[2],
        a[0] * b[1] - a[1] * b[0]
    ];
}

// Usage:
crossProduct([1, 2, 3], [4, 5, 6]); // Returns: [-3, 6, -3] 
```