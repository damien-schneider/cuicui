"use client";

import { useState, useCallback } from "react";

export interface CookieOptions {
  days?: number;
  expires?: Date;
  maxAge?: number;
  path?: string;
  domain?: string;
  secure?: boolean;
  sameSite?: "strict" | "lax" | "none";
}

function buildCookieAttributes(options: CookieOptions): string {
  const parts: string[] = [];

  if (options.expires instanceof Date) {
    parts.push(`expires=${options.expires.toUTCString()}`);
  } else if (typeof options.days === "number") {
    const date = new Date();
    date.setTime(date.getTime() + options.days * 24 * 60 * 60 * 1000);
    parts.push(`expires=${date.toUTCString()}`);
  }

  if (typeof options.maxAge === "number") {
    parts.push(`max-age=${options.maxAge}`);
  }

  parts.push(`path=${options.path ?? "/"}`);

  if (options.domain) {
    parts.push(`domain=${options.domain}`);
  }

  if (options.secure) {
    parts.push("secure");
  }

  if (options.sameSite) {
    parts.push(`SameSite=${options.sameSite}`);
  }

  return parts.length > 0 ? `; ${parts.join("; ")}` : "";
}

function setCookie(
  name: string,
  value: string,
  options: CookieOptions = {},
): void {
  // Prevent server-side execution (Node/SSR):
  if (typeof document === "undefined") {
    return;
  }

  const encodedValue = encodeURIComponent(value);
  const attributes = buildCookieAttributes(options);
  document.cookie = `${name}=${encodedValue}${attributes}`;
}

function getCookie(name: string): string | null {
  // Prevent server-side execution (Node/SSR):
  if (typeof document === "undefined") {
    return null;
  }

  const nameEq = `${name}=`;
  const cookies = document.cookie ? document.cookie.split(";") : [];
  for (let c of cookies) {
    c = c.trim();
    if (c.indexOf(nameEq) === 0) {
      return decodeURIComponent(c.substring(nameEq.length));
    }
  }
  return null;
}

function deleteCookie(name: string, options: CookieOptions = {}): void {
  // Prevent server-side execution (Node/SSR):
  if (typeof document === "undefined") {
    return;
  }

  // Ensure the same path/domain so that the deletion matches the existing cookie.
  setCookie(name, "", {
    ...options,
    days: -1,
  });
}

/**
 * A universal React hook for managing a single cookie **as JSON**.
 */
export function useCookie<T = unknown>(
  cookieName: string,
  defaultValue?: T,
  options: CookieOptions = {},
): [T, (value: T, overrideOptions?: CookieOptions) => void, () => void] {
  const [cookieValue, setCookieValue] = useState<T>(() => {
    // Note: On the server (SSR), getCookie() returns null anyway due to the guard above.
    const rawCookie = getCookie(cookieName);
    if (rawCookie !== null) {
      try {
        return JSON.parse(rawCookie) as T;
      } catch {
        return defaultValue as T;
      }
    }
    return defaultValue as T;
  });

  const updateCookie = useCallback(
    (value: T, overrideOptions: CookieOptions = {}) => {
      const mergedOptions = { ...options, ...overrideOptions };
      const stringifiedValue = JSON.stringify(value);
      setCookie(cookieName, stringifiedValue, mergedOptions);
      setCookieValue(value);
    },
    [cookieName, options],
  );

  const removeCookie = useCallback(() => {
    deleteCookie(cookieName, options);
    setCookieValue(defaultValue as T);
  }, [cookieName, defaultValue, options]);

  return [cookieValue, updateCookie, removeCookie];
}

export default useCookie;
