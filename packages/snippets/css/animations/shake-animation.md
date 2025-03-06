---
title: Shake Animation
description: Adds a shake animation ( commonly used to mark invalid fields )
author: AlsoKnownAs-Ax
tags: shake,shake-horizontal
---

```css
.shake {
    animation: shake .5s ease-in-out;
}

@keyframes shake {
  0%, 100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-10px);
  }
  50% {
    transform: translateX(10px);
  }
  75% {
    transform: translateX(-10px);
  }
}
```
