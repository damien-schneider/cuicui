import { useEventListener } from "@/cuicui/hooks/use-event-listener";
import { useRef, useState, type RefObject } from "react";

export interface UseDropZoneOptions {
  dataTypes?: string[] | ((types: readonly string[]) => boolean);
  onDrop?: (files: File[] | null, event: DragEvent) => void;
  onEnter?: (files: File[] | null, event: DragEvent) => void;
  onLeave?: (files: File[] | null, event: DragEvent) => void;
  onOver?: (files: File[] | null, event: DragEvent) => void;
  multiple?: boolean;
  preventDefaultForUnhandled?: boolean;
}

export interface UseDropZoneReturn {
  files: File[] | null;
  isOverDropZone: boolean;
}

const safariRegex = /^(?:(?!chrome|android).)*safari/i;

export function useDropZone(
  target: RefObject<HTMLElement | null>,
  options: UseDropZoneOptions | UseDropZoneOptions["onDrop"] = {},
): UseDropZoneReturn {
  const [isOverDropZone, setIsOverDropZone] = useState(false);
  const [files, setFiles] = useState<File[] | null>(null);
  const counterRef = useRef(0);
  const isValidRef = useRef(true);

  const _options =
    typeof options === "function" ? { onDrop: options } : options;
  const multiple = _options.multiple ?? true;
  const preventDefaultForUnhandled =
    _options.preventDefaultForUnhandled ?? false;

  const getFiles = (event: DragEvent) => {
    const list = Array.from(event.dataTransfer?.files ?? []);
    if (list.length === 0) {
      return null;
    }
    return multiple ? list : [list[0]];
  };

  const checkDataTypes = (types: string[]) => {
    const dataTypes = _options.dataTypes;

    if (typeof dataTypes === "function") {
      return dataTypes(types);
    }

    // biome-ignore lint/style/useExplicitLengthCheck: <should check the null case>
    if (!dataTypes?.length) {
      return true;
    }

    if (types.length === 0) {
      return false;
    }

    return types.every((type) =>
      dataTypes.some((allowedType) => type.includes(allowedType)),
    );
  };

  const checkValidity = (items: DataTransferItemList) => {
    const types = Array.from(items ?? []).map((item) => item.type);
    const dataTypesValid = checkDataTypes(types);
    const multipleFilesValid = multiple || items.length <= 1;
    return dataTypesValid && multipleFilesValid;
  };

  const isSafari = () =>
    safariRegex.test(navigator.userAgent) && !("chrome" in window);

  const handleDragEvent = (
    event: DragEvent,
    eventType: "enter" | "over" | "leave" | "drop",
  ) => {
    const dataTransferItemList = event.dataTransfer?.items;
    isValidRef.current =
      (dataTransferItemList && checkValidity(dataTransferItemList)) ?? false;

    if (preventDefaultForUnhandled) {
      event.preventDefault();
    }

    if (!(isSafari() || isValidRef.current)) {
      if (event.dataTransfer) {
        event.dataTransfer.dropEffect = "none";
      }
      return;
    }

    event.preventDefault();
    if (event.dataTransfer) {
      event.dataTransfer.dropEffect = "copy";
    }

    const currentFiles = getFiles(event);

    switch (eventType) {
      case "enter": {
        counterRef.current += 1;
        setIsOverDropZone(true);
        _options.onEnter?.(null, event);
        break;
      }
      case "over":
        _options.onOver?.(null, event);
        break;
      case "leave": {
        counterRef.current -= 1;
        if (counterRef.current === 0) {
          setIsOverDropZone(false);
        }
        _options.onLeave?.(null, event);
        break;
      }
      case "drop": {
        counterRef.current = 0;
        setIsOverDropZone(false);
        if (isValidRef.current) {
          setFiles(currentFiles);
          _options.onDrop?.(currentFiles, event);
        }
        break;
      }
      default:
        break;
    }
  };

  useEventListener(
    "dragenter",
    (dragEvent) => {
      handleDragEvent(dragEvent, "enter");
    },
    target,
  );
  useEventListener(
    "dragover",
    (dragEvent) => {
      handleDragEvent(dragEvent, "over");
    },
    target,
  );
  useEventListener(
    "dragleave",
    (dragEvent) => {
      handleDragEvent(dragEvent, "leave");
    },
    target,
  );
  useEventListener(
    "drop",
    (dragEvent) => {
      handleDragEvent(dragEvent, "drop");
    },
    target,
  );

  return {
    files,
    isOverDropZone,
  };
}
