---
title: Extract Initials from Name
description: Extracts and returns the initials from a full name.
author: axorax
tags: string,initials,name
---

```js
function getInitials(name) {
  return name.split(' ').map(part => part.charAt(0).toUpperCase()).join('');
}

// Usage:
getInitials('John Doe'); // Returns: 'JD'
```
