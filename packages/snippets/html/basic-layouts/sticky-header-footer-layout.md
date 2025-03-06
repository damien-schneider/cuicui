---
title: Sticky Header-Footer Layout
description: Full-height layout with sticky header and footer, using modern viewport units and flexbox.
author: GreenMan36
tags: css,layout,sticky,flexbox,viewport
---

```html
<!DOCTYPE html>
<html style="margin: 0">
  <head>
    <style type="text/css">
      body {
        margin: 0;
        display: flex;
        flex-direction: column;
        min-height: 100svh; /* Smallest viewport height */
        min-height: 100vh;  /* Standard viewport height */
        min-height: 100dvh; /* Dynamic viewport height */
        min-height: 100lvh; /* Largest viewport height */
        background-color: red;
      }

      .header {
        position: sticky;
        top: 0;
        left: 0;
        right: 0;
        background-color: blue;
      }

      .body {
        flex-grow: 1;
        background-color: whitesmoke;
      }

      .footer {
        position: sticky;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: blue;
      }
    </style>
  <head>
  <body>
    <div class="header">header</div>
    <div class="body">body/content</div>
    <div class="footer">footer</div>
  </body>
</html>
```
