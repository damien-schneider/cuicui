---
title: Deep Required Type
description: Converts all properties of a type, including nested objects, into required.
author: aelshinawy
tags: typescript,helper-types,typedefinition,required
---

```ts
type DeepRequired<T> = T extends object
    ? { [K in keyof T]-?: DeepRequired<T[K]> }
    : T;


// Usage:
type A = {
    id?: string;
    name?: string;
    details?: {
        age?: number;
        address?: { city?: string; zip?: string };
    };
};

type RequiredA = DeepRequired<A>;
// Result: { id: string; name: string; details: { age: number; address: { city: string; zip: string }; }; }
```