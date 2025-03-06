---
title: Deep Partial Type
description: Converts all properties of a type, including nested objects, into optional.
author: aelshinawy
tags: typescript,helper-types,typedefinition,optional
---

```ts
type DeepPartial<T> = {
    [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};


// Usage:
type A = {
    name: string;
    details: {
        age: number;
        address: { city: string; zip: string };
    };
};

type PartialA = DeepPartial<A>;
/*
Type PartialA:
{
  name?: string;
  details?: {
    age?: number;
    address?: { city?: string; zip?: string };
  };
}
*/
```