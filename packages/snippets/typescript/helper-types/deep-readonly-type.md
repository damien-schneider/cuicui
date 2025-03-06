---
title: Deep Readonly Type
description: Converts all properties of a type, including nested objects, into readonly.
author: aelshinawy
tags: typescript,helper-types,typedefinition,readonly
---

```ts
type DeepReadonly<T> = {
    readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};


// Usage:
type A = {
    name: string;
    details: {
        age: number;
        address: { city: string; zip: string };
    };
};

type ReadonlyA = DeepReadonly<A>;
/*
Type ReadonlyA:
{
  readonly name: string;
  readonly details: {
    readonly age: number;
    readonly address: { readonly city: string; readonly zip: string };
  };
}
*/
```