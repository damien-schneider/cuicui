---
title: Format File Size
description: Converts bytes into human-readable file size format.
author: jjcantu
tags: format,size
---

```js
function formatFileSize(bytes) {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Usage:
console.log(formatFileSize(1234)); // Output: "1.21 KB"
console.log(formatFileSize(1234567)); // Output: "1.18 MB"
``` 