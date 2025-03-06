---
title: Pulse Animation
description: Adds a smooth pulsing animation with opacity and scale effects
author: AlsoKnownAs-Ax
tags: animation,pulse,pulse-scale
contributors: alanb4rt
---

```css
.pulse {
  animation: pulse 1s ease-in-out infinite alternate;
}

@keyframes pulse {
  from {
    opacity: 0.5;
    transform: scale(1);
  }
  to {
    opacity: 1;
    transform: scale(1.05);
  }
}
```
