---
title: Responsive Design
description: The different responsive breakpoints.
author: kruimol
tags: responsive,media queries
---

```css
/* Phone */
.element {
  margin: 0 10%
}

/* Tablet */
@media (min-width: 640px) {
  .element {
    margin: 0 20%
  }
}

/* Desktop base */
@media (min-width: 768px) {
  .element {
    margin: 0 30%
  }
}

/* Desktop large */
@media (min-width: 1024px) {
  .element {
    margin: 0 40%
  }
}

/* Desktop extra large */
@media (min-width: 1280px) {
  .element {
    margin: 0 60%
  }
}

/* Desktop bige */
@media (min-width: 1536px) {
  .element {
    margin: 0 80%
  }
}
```
