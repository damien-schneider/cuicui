import { useEffect } from "react";

const Keys = {
  Backspace: "Backspace",
  Tab: "Tab",
  Enter: "Enter",
  Shift: "Shift",
  Control: "Control",
  Alt: "Alt",
  Pause: "Pause",
  CapsLock: "CapsLock",
  Escape: "Escape",
  Space: " ",
  PageUp: "PageUp",
  PageDown: "PageDown",
  End: "End",
  Home: "Home",
  LeftArrow: "ArrowLeft",
  UpArrow: "ArrowUp",
  RightArrow: "ArrowRight",
  DownArrow: "ArrowDown",
  Insert: "Insert",
  Delete: "Delete",
  Meta: "Meta",
  Key0: "0",
  Key1: "1",
  Key2: "2",
  Key3: "3",
  Key4: "4",
  Key5: "5",
  Key6: "6",
  Key7: "7",
  Key8: "8",
  Key9: "9",
  KeyA: "a",
  KeyB: "b",
  KeyC: "c",
  KeyD: "d",
  KeyE: "e",
  KeyF: "f",
  KeyG: "g",
  KeyH: "h",
  KeyI: "i",
  KeyJ: "j",
  KeyK: "k",
  KeyL: "l",
  KeyM: "m",
  KeyN: "n",
  KeyO: "o",
  KeyP: "p",
  KeyQ: "q",
  KeyR: "r",
  KeyS: "s",
  KeyT: "t",
  KeyU: "u",
  KeyV: "v",
  KeyW: "w",
  KeyX: "x",
  KeyY: "y",
  KeyZ: "z",
  LeftMeta: "Meta",
  RightMeta: "Meta",
  Select: "Select",
  Numpad0: "0",
  Numpad1: "1",
  Numpad2: "2",
  Numpad3: "3",
  Numpad4: "4",
  Numpad5: "5",
  Numpad6: "6",
  Numpad7: "7",
  Numpad8: "8",
  Numpad9: "9",
  Multiply: "*",
  Add: "+",
  Subtract: "-",
  Decimal: ".",
  Divide: "/",
  F1: "F1",
  F2: "F2",
  F3: "F3",
  F4: "F4",
  F5: "F5",
  F6: "F6",
  F7: "F7",
  F8: "F8",
  F9: "F9",
  F10: "F10",
  F11: "F11",
  F12: "F12",
  NumLock: "NumLock",
  ScrollLock: "ScrollLock",
  Semicolon: ";",
  Equals: "=",
  Comma: ",",
  Dash: "-",
  Period: ".",
  ForwardSlash: "/",
  GraveAccent: "`",
  OpenBracket: "[",
  BackSlash: "\\",
  CloseBracket: "]",
  Quote: "'",
};

export interface KeyPressItem {
  keys: Array<keyof typeof Keys>;
  event: (event: KeyboardEvent) => void;
  preventDefault?: boolean;
}

function checkCombination(
  event: KeyboardEvent,
  keys: Array<keyof typeof Keys>,
): boolean {
  return keys.every((key) => {
    if (key === "Meta") {
      return event.metaKey;
    }
    if (key === "Control") {
      return event.ctrlKey;
    }
    if (key === "Shift") {
      return event.shiftKey;
    }
    if (key === "Alt") {
      return event.altKey;
    }
    return event.key === Keys[key];
  });
}

export function useKeyPress({
  keyPressItems,
  tagsToIgnore = ["INPUT", "TEXTAREA", "SELECT"],
  triggerOnContentEditable = false,
}: {
  keyPressItems: KeyPressItem[];
  tagsToIgnore?: string[];
  triggerOnContentEditable?: boolean;
}) {
  useEffect(() => {
    const keydownListener = (event: KeyboardEvent) => {
      for (const keyPressItem of keyPressItems) {
        const {
          keys,
          event: triggerEvent,
          preventDefault = true,
        } = keyPressItem;
        if (
          checkCombination(event, keys) &&
          shouldFireEvent(event, tagsToIgnore, triggerOnContentEditable)
        ) {
          if (preventDefault) {
            event.preventDefault();
          }

          triggerEvent(event);
        }
      }
    };

    document.addEventListener("keydown", keydownListener);
    return () => document.removeEventListener("keydown", keydownListener);
  }, [keyPressItems, tagsToIgnore, triggerOnContentEditable]);
}

function shouldFireEvent(
  event: KeyboardEvent,
  tagsToIgnore: string[],
  triggerOnContentEditable: boolean,
): boolean {
  const target = event.target as HTMLElement;
  return !(
    (target.isContentEditable && !triggerOnContentEditable) ||
    tagsToIgnore.includes(target.tagName)
  );
}
