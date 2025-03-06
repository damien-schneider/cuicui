---
title: Kill Previous Instances
description: Kill all previous instances of a script
author: saminjay
tags: kill,process,background
---

```bash
function kill_prev() {
    # $$ contains current pid (grep ignore so it doesn't suicide)
    local processes
    readarray -t processes < <(pgrep -f "$0" | grep -v "$$")
    kill "${processes[@]}" >/dev/null 2>&1
}

# Usage:
# Add this function to your background running script
# It will make sure that only one instance of your script is running at a time
kill_prev
```
