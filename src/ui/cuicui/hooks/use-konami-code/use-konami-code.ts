"use client";

import { useEffect, useState, useCallback, useMemo } from "react";

type KonamiCallback = () => void;

type MatchMode = "code" | "key" | "codeOrKey";

interface UseKonamiCodeOptions {
  /**
   * Determines how key presses are matched against the sequence.
   * - "code": Matches using `KeyboardEvent.code`.
   * - "key": Matches using `KeyboardEvent.key`.
   * - "codeOrKey": Matches if either `code` or `key` matches.
   */
  matchMode?: MatchMode;
  /**
   * Specifies whether the sequence should be case-insensitive.
   * Applicable only when `matchMode` is "key" or "codeOrKey".
   */
  caseInsensitive?: boolean;
}

/**
 * Custom hook to detect a specific key sequence.
 *
 * @param sequence - An array of strings representing the desired key sequence.
 * @param callback - A function to be executed when the key sequence is successfully entered.
 * @param options - Optional configuration for matching mode and case sensitivity.
 * @returns The current sequence of keys pressed.
 */
const useKonamiCode = (
  sequence: string[],
  callback: KonamiCallback,
  options?: UseKonamiCodeOptions,
): string[] => {
  const { matchMode = "code", caseInsensitive = false } = options || {};
  const [currentSequence, setCurrentSequence] = useState<string[]>([]);

  // Memoize the target sequence based on matchMode and case sensitivity
  const targetSequence = useMemo(() => {
    if (matchMode === "key" || matchMode === "codeOrKey") {
      return caseInsensitive
        ? sequence.map((key) => key.toLowerCase())
        : sequence;
    }
    return sequence;
  }, [sequence, matchMode, caseInsensitive]);

  // Handler for keydown events
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      let identifier: string[] = [];

      if (matchMode === "code") {
        identifier = [event.code];
      } else if (matchMode === "key") {
        identifier = [caseInsensitive ? event.key.toLowerCase() : event.key];
      } else if (matchMode === "codeOrKey") {
        identifier = [
          event.code,
          caseInsensitive ? event.key.toLowerCase() : event.key,
        ];
      }

      setCurrentSequence((prevSequence) => {
        let updatedSequence = [...prevSequence];

        for (const id of identifier) {
          updatedSequence = [...updatedSequence, id];

          // Keep the sequence length within the target sequence length
          if (updatedSequence.length > targetSequence.length) {
            updatedSequence.shift();
          }

          // Check if the updated sequence matches the target sequence
          const isMatch =
            updatedSequence.length === targetSequence.length &&
            targetSequence.every(
              (target, index) => target === updatedSequence[index],
            );

          if (isMatch) {
            callback();
            updatedSequence = []; // Reset the sequence after successful entry
          }
        }

        return updatedSequence;
      });
    },
    [matchMode, caseInsensitive, targetSequence, callback],
  );

  // Effect to add and clean up the event listener
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return currentSequence;
};

export default useKonamiCode;
