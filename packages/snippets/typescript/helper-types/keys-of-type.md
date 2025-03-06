---
title: Keys of Type
description: Extracts keys from an object type that match a specified value type.
author: aelshinawy
tags: typescript,helper-types,typedefinition
---

```ts
type KeysOfType<T, U> = { [K in keyof T]: T[K] extends U ? K : never }[keyof T];


// Usage:
type A = { name: string; age: number; isActive: boolean, isDeleted: boolean };
type StringKeys = KeysOfType<A, string>; // "name"
type BooleanKeys = KeysOfType<A, boolean>; // "isActive" | "isDeleted"
```