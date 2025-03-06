---
title: Exclusive Types
description: Allows to have a type which conforms to either/or.
author: px-d
tags: typescript,helper-types,typedefinition
---

```ts
type Exclusive<T, U = T> = T | U extends Record<string, unknown>
  ?
      | ({ [P in Exclude<keyof T, keyof U>]?: never } & U)
      | ({ [P in Exclude<keyof U, keyof T>]?: never } & T)
  : T | U;


// Usage:
type A = { name: string; email?: string; provider?: string };
type B = { name: string; phone?: string; country?: string };

type EitherOr = Exclusive<A, B>;

const w: EitherOr = { name: "John", email: "j@d.c" }; // ✅
const x: EitherOr = { name: "John", phone: "+123 456" }; // ✅
const y: EitherOr = { name: "John", email: "", phone: "" }; // ⛔️
const z: EitherOr = { name: "John", phne: "", provider: "" }; // ⛔️
```