---
title:  Keys to Optional
description: Makes only the specified keys of an object type optional.
author: aelshinawy
tags: typescript,helper-types,typedefinition,optional
---

```ts
type OptionalKeys<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;


// Usage:
type A = {
    id: string;
    name: string;
    age: number;
};

type WithOptionalName = OptionalKeys<A, "name">;
// { id: string; age: number; name?: string }

type WithOptionalNameAndAge = OptionalKeys<A, "name" | "age">;
// Result: { id: string; name?: string; age?: number }
```