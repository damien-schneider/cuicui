---
title: Blink Animation
description: Adds an infinite blinking animation to an element
author: AlsoKnownAs-Ax
tags: animation,blink,infinite
---

```css
.blink {
    animation: blink 1s linear infinite;
}

@keyframes blink{
    0%{
        opacity: 0;
    }
    50%{
        opacity: 1;
    }
    100%{
        opacity: 0;
    }
}
```
