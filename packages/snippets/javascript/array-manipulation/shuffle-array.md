---
title: Shuffle Array
description: Shuffles an Array.
author: loxt-nixo
tags: array,shuffle
---

```js
function shuffleArray(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Usage:
const array = [1, 2, 3, 4, 5];
shuffleArray(array); // Shuffles `array` in place
```
