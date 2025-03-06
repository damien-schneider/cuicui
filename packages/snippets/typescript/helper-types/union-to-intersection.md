---
title: Union to Intersection
description: Converts a union type into an intersection type.
author: aelshinawy
tags: typescript,helper-types,typedefinition,intersection,union
---

```ts
type UnionToIntersection<U> = (U extends any ? (arg: U) => void : never) extends (arg: infer I) => void
    ? I
    : never;


// Usage:
type A = { id: string };
type B = { name: string };
type C = { age: number };

type Intersected = UnionToIntersection<A | B | C>;
// { id: string } & { name: string } & { age: number }
```