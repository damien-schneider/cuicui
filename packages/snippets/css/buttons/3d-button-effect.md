---
title: 3D Button Effect
description: Adds a 3D effect to a button when clicked.
author: dostonnabotov
tags: button,3D,effect
---

```css
.button {
  background-color: #28a745;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.1s;
}

.button:active {
  transform: translateY(2px);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}
```
