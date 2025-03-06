---
title: Convert Tabs to Spaces
description: Converts all tab characters in a string to spaces.
author: axorax
tags: string,tabs,spaces
---

```js
function tabsToSpaces(str, spacesPerTab = 4) {
  return str.replace(/\t/g, ' '.repeat(spacesPerTab));
}

// Usage:
tabsToSpaces('Hello\tWorld', 2); // Returns: 'Hello  World'
```
