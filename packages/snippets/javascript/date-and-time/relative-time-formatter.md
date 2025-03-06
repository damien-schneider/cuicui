---
title: Relative Time Formatter
description: Displays how long ago a date occurred or how far in the future a date is.
author: Yugveer06
tags: date,time,relative,future,past
---

```js
const getRelativeTime = (date) => {
  const now = Date.now();
  const diff = date.getTime() - now;
  const seconds = Math.abs(Math.floor(diff / 1000));
  const minutes = Math.abs(Math.floor(seconds / 60));
  const hours = Math.abs(Math.floor(minutes / 60));
  const days = Math.abs(Math.floor(hours / 24));
  const years = Math.abs(Math.floor(days / 365));

  if (Math.abs(diff) < 1000) return 'just now';

  const isFuture = diff > 0;

  if (years > 0) return `${isFuture ? 'in ' : ''}${years} ${years === 1 ? 'year' : 'years'}${isFuture ? '' : ' ago'}`;
  if (days > 0) return `${isFuture ? 'in ' : ''}${days} ${days === 1 ? 'day' : 'days'}${isFuture ? '' : ' ago'}`;
  if (hours > 0) return `${isFuture ? 'in ' : ''}${hours} ${hours === 1 ? 'hour' : 'hours'}${isFuture ? '' : ' ago'}`;
  if (minutes > 0) return `${isFuture ? 'in ' : ''}${minutes} ${minutes === 1 ? 'minute' : 'minutes'}${isFuture ? '' : ' ago'}`;

  return `${isFuture ? 'in ' : ''}${seconds} ${seconds === 1 ? 'second' : 'seconds'}${isFuture ? '' : ' ago'}`;
}

// Usage:
const pastDate = new Date('2021-12-29 13:00:00');
const futureDate = new Date('2099-12-29 13:00:00');
getRelativeTime(pastDate); // x years ago
getRelativeTime(new Date()); // just now
getRelativeTime(futureDate); // in x years
```
