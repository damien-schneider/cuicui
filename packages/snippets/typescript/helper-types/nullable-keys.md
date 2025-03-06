---
title: Nullable Keys
description: Extracts keys from an object type that allow null or undefined values.
author: aelshinawy
tags: typescript,helper-types,typedefinition,nullable
---

```ts
type NullableKeys<T> = {
    [K in keyof T]: null extends T[K] ? K : undefined extends T[K] ? K : never;
}[keyof T];


// Usage:
type A = {
    id: string;
    name?: string;
    description: string | null;
};

type Nullable = NullableKeys<A>; // "name" | "description"
```