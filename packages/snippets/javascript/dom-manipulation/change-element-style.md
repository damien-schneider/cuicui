---
title: Change Element Style
description: Changes the inline style of an element.
author: axorax
tags: dom,style
---

```js
const changeElementStyle = (element, styleObj) => {
  Object.entries(styleObj).forEach(([property, value]) => {
    element.style[property] = value;
  });
};

// Usage:
const element = document.querySelector('.my-element');
changeElementStyle(element, { color: 'red', backgroundColor: 'yellow' });
```
