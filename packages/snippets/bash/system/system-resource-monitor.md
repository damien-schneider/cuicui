---
title: System Resource Monitor
description: Monitors system resources (CPU, RAM, disk, users)
author: sponkurtus2
tags: file,system
---

```bash
system_resources () {
      echo "CPU Load: $(top -bn1 | grep "Cpu(s)" | awk '{print $2}')%"
      echo "Memory Used: $(free -m | awk 'NR==2{printf "%.2f%%", $3*100/$2}')"
      echo "Disk Used: $(df -h / | awk 'NR==2{print $5}')"
      echo "Active Users: $(who | wc -l)"
}

system_resources "$@"

# Usage:
chmod a+x system-resource-monitor.sh # First make it executable for all the users

./system-resource-monitor.sh  # It will print the following system resources (CPU, RAM, disk, and active users)
```
