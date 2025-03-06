---
title: RGB Border Color Animation
description: changes border of an Element to rgb onhover (Can be changed)'
author: Brianali-codes
tags: animation,effects,borders
---

```css
.yourElement {
    /* Your Elements styles go here*/
    border-style: solid;
    border-radius: 10px;
    color: rgb(0, 0, 0);

}
.yourElement:hover {

    animation: change-color;
    animation-duration: 0.5s;         /* you can alter the duration of the animation here. */
    animation-iteration-count: infinite;         /* Choose to play animation infinitely or once on hover. */
}

@keyframes change-color {
    0% {
        border-color: red;
    }

    50% {
        border-color: green;
    }

    100% {
        border-color: blue;
    }
}


```
