import { useCallback, useState } from "react";

interface HistoryEntry {
  timestamp: number;
  snapshot: number;
}

export function useHistory(value: number, options: { capacity?: number } = {}) {
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [currentIndex, setCurrentIndex] = useState(-1);

  const { capacity = 10 } = options;

  const addToHistory = useCallback(
    (newValue: number) => {
      setHistory((prev) => {
        const newHistory = [
          ...prev.slice(0, currentIndex + 1),
          { timestamp: Date.now(), snapshot: newValue },
        ].slice(-capacity);

        setCurrentIndex(newHistory.length - 1);
        return newHistory;
      });
    },
    [currentIndex, capacity],
  );

  const undo = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
      return history[currentIndex - 1].snapshot;
    }
    return value;
  }, [currentIndex, history, value]);

  const redo = useCallback(() => {
    if (currentIndex < history.length - 1) {
      setCurrentIndex((i) => i + 1);
      return history[currentIndex + 1].snapshot;
    }
    return value;
  }, [currentIndex, history, value]);

  return {
    history,
    addToHistory,
    undo,
    redo,
    canUndo: currentIndex > 0,
    canRedo: currentIndex < history.length - 1,
  };
}

export default useHistory;
