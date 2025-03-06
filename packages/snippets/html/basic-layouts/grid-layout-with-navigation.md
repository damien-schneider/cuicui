---
title: Grid Layout with Navigation
description: Full-height grid layout with header navigation using nesting syntax.
author: GreenMan36
tags: css,layout,sticky,grid,full-height
---

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        margin: 0;
        min-height: 100vh;
        display: grid;
        grid-template-rows: auto 1fr auto;
        background: red; /* Shouldn't be visible */
      }

      .header {
        background: #3b82f6;
        padding: 1rem;
        display: flex;
        & .menu {
          margin-left: auto;
        }
        & .menu ul {
          margin-left: auto;
          display: flex;
          gap: 1rem;
        }
      }

      .main {
        background: #f3f4f6;
        padding: 1rem;
      }

      .footer {
        background: #1f2937;
        padding: 1rem;
      }
    </style>
  </head>
  <body>
    <div class="header">
      Header
      <nav class="menu">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
    <div class="main">Main Content</div>
    <div class="footer">Footer</div>
  </body>
</html>
```
