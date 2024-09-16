"use client";
import { useRef, useSyncExternalStore } from "react";

declare global {
  interface Navigator {
    connection?: NetworkInformation;
    mozConnection?: NetworkInformation;
    webkitConnection?: NetworkInformation;
  }
}

interface NetworkInformation extends EventTarget {
  readonly type?: string;
  readonly effectiveType?: string;
  readonly downlink?: number;
  readonly downlinkMax?: number;
  readonly rtt?: number;
  readonly saveData?: boolean;
  onchange?: (this: NetworkInformation, ev: Event) => void;
  addEventListener(
    type: "change",
    listener: (this: NetworkInformation, ev: Event) => void,
    options?: boolean | AddEventListenerOptions,
  ): void;
  removeEventListener(
    type: "change",
    listener: (this: NetworkInformation, ev: Event) => void,
    options?: boolean | EventListenerOptions,
  ): void;
}

export interface NetworkState {
  online: boolean;
  downlink?: number;
  downlinkMax?: number;
  effectiveType?: string;
  rtt?: number;
  saveData?: boolean;
  type?: string;
}

function isShallowEqual(object1: NetworkState, object2: NetworkState): boolean {
  const keys1 = Object.keys(object1) as Array<keyof NetworkState>;
  const keys2 = Object.keys(object2) as Array<keyof NetworkState>;

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
}

const getConnection = (): NetworkInformation | undefined => {
  return (
    navigator?.connection ||
    navigator?.mozConnection ||
    navigator?.webkitConnection
  );
};

const useNetworkStateSubscribe = (callback: () => void): (() => void) => {
  window.addEventListener("online", callback, { passive: true });
  window.addEventListener("offline", callback, { passive: true });

  const connection = getConnection();

  if (connection) {
    connection.addEventListener("change", callback, { passive: true });
  }

  return () => {
    window.removeEventListener("online", callback);
    window.removeEventListener("offline", callback);

    if (connection) {
      connection.removeEventListener("change", callback);
    }
  };
};

const getNetworkStateServerSnapshot = (): never => {
  throw Error("useNetworkState is a client-only hook");
};

export function useNetworkStatus(): NetworkState {
  const cache = useRef<NetworkState>({ online: true });

  const getSnapshot = (): NetworkState => {
    const online = navigator.onLine;
    const connection = getConnection();

    const nextState: NetworkState = {
      online,
      downlink: connection?.downlink,
      downlinkMax: connection?.downlinkMax,
      effectiveType: connection?.effectiveType,
      rtt: connection?.rtt,
      saveData: connection?.saveData,
      type: connection?.type,
    };

    if (isShallowEqual(cache.current, nextState)) {
      return cache.current;
    }
    cache.current = nextState;
    return nextState;
  };

  return useSyncExternalStore(
    useNetworkStateSubscribe,
    getSnapshot,
    getNetworkStateServerSnapshot,
  );
}
