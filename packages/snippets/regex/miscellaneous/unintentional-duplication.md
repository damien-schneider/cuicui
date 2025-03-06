---
title: Unintentional Duplication
description: Matches duplicated word in a text.
author: majvax
tags: duplication
---


```regex
\b(\w+)\s+\1\b


-> Usage:
I need to finish this task ✗
I need to to finish this task ✓
```
