---
title: Whitespace Trimmer
description: Matches leading and/or trailing whitespace.
author: majvax
tags: trim
---


```regex
^\s+|\s+$


-> Usage:
(don't account for the quotation marks, it just to visualize whitespace)
"Hello World" ✗
" Hello World" ✓
"Hello World " ✓
" Hello World " ✓
```
