---
title: Matrix Multiplication
description: Multiplies two matrices, where the number of columns in the first matrix equals the number of rows in the second.
author: JanluOfficial
tags: math,matrix-algebra
---

```js
function matrixMultiply(A, B) {
    const rowsA = A.length;
    const colsA = A[0].length;
    const rowsB = B.length;
    const colsB = B[0].length;

    if (colsA !== rowsB) {
        throw new Error('Number of columns of A must equal the number of rows of B');
    }

    let result = Array.from({ length: rowsA }, () => Array(colsB).fill(0));

    for (let i = 0; i < rowsA; i++) {
        for (let j = 0; j < colsB; j++) {
            for (let k = 0; k < colsA; k++) {
                result[i][j] += A[i][k] * B[k][j];
            }
        }
    }

    return result;
}

// Usage:
matrixMultiply([[1, 2], [3, 4]], [[5, 6], [7, 8]]); // Returns: [[19, 22], [43, 50]]
```