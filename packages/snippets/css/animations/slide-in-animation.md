---
title: Slide-in Animation
description: Adds a slide-in from the right side of the screen
author: AlsoKnownAs-Ax
tags: animation,slide-in,slide-right
---

```css
.slide-in {
    animation: slide-in 1s ease-in-out;
}

@keyframes slide-in {
    from {
        scale: 300% 1;
        translate: 150vw 0;
    }

    to {
        scale: 100% 1;
        translate: 0 0;
    }
}
```
