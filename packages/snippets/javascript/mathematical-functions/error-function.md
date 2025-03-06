---
title: Error function
description: Computes the error function (erf(x)) for a given input x, which is a mathematical function used frequently in probability, statistics, and partial differential equations.
author: JanluOfficial
tags: math
---

```js
function erf(x) {
    const sign = Math.sign(x);
    const absX = Math.abs(x);
    const t = 1 / (1 + 0.3275911 * absX);
    const a1 = 0.254829592, a2 = -0.284496736, a3 = 1.421413741, a4 = -1.453152027, a5 = 1.061405429;
    const poly = t * (a1 + t * (a2 + t * (a3 + t * (a4 + t * a5))));
    return sign * (1 - poly * Math.exp(-absX * absX));
}

// Usage:
erf(-1); // Returns:    -0.8427006897475899
erf(1);  // Returns:     0.8427006897475899
```