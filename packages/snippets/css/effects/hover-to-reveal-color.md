---
title: Hover to Reveal Color
description: A card with an image that transitions from grayscale to full color on hover.
author: Haider-Mukhtar
tags: hover,image,effects
---

```css
.card {
  height: 300px;
  width: 200px;
  border-radius: 5px;
  overflow: hidden;
}

.card img{
  height: 100%;
  width: 100%;
  object-fit: cover;
  filter: grayscale(100%);
  transition: all 0.3s;
  transition-duration: 200ms;
  cursor: pointer;
}

.card:hover img {
  filter: grayscale(0%);
  scale: 1.05;
}
```
