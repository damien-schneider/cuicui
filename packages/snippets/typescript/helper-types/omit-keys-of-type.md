---
title: Omit Keys of Type
description: Removes keys of a specified type from an object type.
author: aelshinawy
tags: typescript,helper-types,typedefinition,omit,keys
---

```ts
type OmitKeysOfType<T, U> = {
    [K in keyof T as T[K] extends U ? never : K]: T[K];
};


// Usage:
type A = {
    id: string;
    isActive: boolean;
    data: number[];
};

type WithoutBoolean = OmitKeysOfType<A, boolean>; // { id: string; data: number[] }
```