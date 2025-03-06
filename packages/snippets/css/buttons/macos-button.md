---
title: MacOS Button
description: A macOS-like button style, with hover and shading effects.
author: e3nviction
tags: button,macos,hover,transition
---

```css
.button {
 font: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,;
 background: #0a85ff;
 color: #fff;
 padding: 8px 12px;
 border: none;
 margin: 4px;
 border-radius: 10px;
 cursor: pointer;
 box-shadow: inset 0 1px 1px #fff2, 0px 2px 3px -2px rgba(0, 0, 0, 0.3) !important; /*This is really performance heavy*/
 font-size: 14px;
 display: flex;
 align-items: center;
 justify-content: center;
 text-decoration: none;
 transition: all 150ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.button:hover {
 background: #0974ee;
 color: #fff
}
```
