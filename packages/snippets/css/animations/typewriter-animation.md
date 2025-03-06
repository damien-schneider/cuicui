---
title: Typewriter Animation
description: Adds a typewriter animation + blinking cursor
author: AlsoKnownAs-Ax
tags: blinking,typewriter
---

```html
    <div class="typewriter">
      <div>
          <p>Typerwriter Animation</p>
      </div>
    </div>
```

```css
    .typewriter{
        display: flex;
        justify-content: center;
    }

    .typewriter p {
        overflow: hidden;
        font-size: 1.5rem;
        font-family: monospace;
        border-right: 1px solid;
        margin-inline: auto;
        white-space: nowrap;
        /* The cursor will inherit the text's color by default */
        /* border-color: red */                
        /* Steps: number of chars (better to set directly in js)*/
        animation: typing 3s steps(21) forwards,
        blink 1s step-end infinite;
    }

    @keyframes typing{
        from{
            width: 0%
        }
        to{
            width: 100%
        }
    }

    @keyframes blink{
        50%{
            border-color: transparent;
        }
    }
```
