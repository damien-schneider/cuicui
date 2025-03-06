---
title: Required Keys
description: Extracts required keys from an object.
author: aelshinawy
tags: typescript,helper-types,typedefinition,required
---

```ts
type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? never : K;
}[keyof T];


// Usage:
type A = {
    id: string;
    name?: string;
    isActive: boolean;
};

type ReqKeys = RequiredKeys<A>; // "id" | "isActive"
```