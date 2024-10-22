"use client";
import { useEffect, useState } from "react";

const isClient = typeof window === "object";

type HistoryMethod = "pushState" | "replaceState";

declare global {
  interface WindowEventMap {
    pushstate: CustomEvent<{ state: unknown }>;
    replacestate: CustomEvent<{ state: unknown }>;
  }
}

const on = (
  obj: Window,
  type: keyof WindowEventMap,
  listener: (event: Event) => void,
) => obj.addEventListener(type, listener);

const off = (
  obj: Window,
  type: keyof WindowEventMap,
  listener: (event: Event) => void,
) => obj.removeEventListener(type, listener);

const patchHistoryMethod = (method: HistoryMethod) => {
  const original = history[method];

  history[method] = function (
    this: History,
    data: unknown,
    title: string,
    url?: string | null,
  ) {
    const result = original.apply(this, [data, title, url]);
    const event = new CustomEvent<{ state: unknown }>(method.toLowerCase(), {
      detail: { state: data },
    });
    window.dispatchEvent(event);
    return result;
  };
};

if (isClient) {
  patchHistoryMethod("pushState");
  patchHistoryMethod("replaceState");
}

interface LocationState {
  trigger: string;
  state: unknown;
  length: number;
  hash: string;
  host: string;
  hostname: string;
  href: string;
  origin: string;
  pathname: string;
  port: string;
  protocol: string;
  search: string;
}

const defaultLocationState: LocationState = {
  trigger: "load",
  state: null,
  length: 1,
  hash: "",
  host: "",
  hostname: "",
  href: "",
  origin: "",
  pathname: "",
  port: "",
  protocol: "",
  search: "",
};

const useLocation = (): LocationState => {
  const buildState = (trigger: string): LocationState => {
    if (!isClient) {
      return defaultLocationState;
    }

    const { state, length } = history;
    const {
      hash,
      host,
      hostname,
      href,
      origin,
      pathname,
      port,
      protocol,
      search,
    } = window.location;

    return {
      trigger,
      state,
      length,
      hash,
      host,
      hostname,
      href,
      origin,
      pathname,
      port,
      protocol,
      search,
    };
  };

  const [locationState, setLocationState] = useState<LocationState>(
    buildState("load"),
  );

  // !! Should try to use the `useEffect` hook with an exhaustive dependency array
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (!isClient) {
      return;
    }
    const onChange = (trigger: string) => {
      setLocationState(buildState(trigger));
    };

    const handlePopState = () => onChange("popstate");
    const handlePushState = () => onChange("pushstate");
    const handleReplaceState = () => onChange("replacestate");

    on(window, "popstate", handlePopState);
    on(window, "pushstate", handlePushState);
    on(window, "replacestate", handleReplaceState);

    return () => {
      off(window, "popstate", handlePopState);
      off(window, "pushstate", handlePushState);
      off(window, "replacestate", handleReplaceState);
    };
  }, []);

  return locationState;
};

export default useLocation;
