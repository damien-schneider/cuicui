---
title: Hello, World!
description: Show Hello World on the page.
author: ACR1209
tags: printing,hello-world
---

```tsx
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div>
            <h1>Hello, World!</h1>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
```
