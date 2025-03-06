---
title:  At Least One Key
description: Ensures that at least one property of an object is required.
author: aelshinawy
tags: typescript,helper-types,typedefinition
---

```ts
type AtLeastOne<T> = {
    [K in keyof T]: Pick<T, K> & Partial<Omit<T, K>>;
}[keyof T];


// Usage:
type A = {
    id?: string;
    name?: string;
    isActive?: boolean;
};

type AtLeastOneA = AtLeastOne<A>;
// Requires at least one of 'id', 'name', or 'isActive' to be defined
```