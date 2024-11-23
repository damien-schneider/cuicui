// __mocks__/globals-mocks.ts

import { vi } from "vitest";

// Mock implementation of ResizeObserver
const ResizeObserverMock = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

// Stub the global ResizeObserver with the mock
vi.stubGlobal("ResizeObserver", ResizeObserverMock);

// Example: Mock implementation of window.fetch
const fetchMock = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({}),
  }),
);

// Stub the global fetch with the mock
vi.stubGlobal("fetch", fetchMock);

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // Deprecated
    removeListener: vi.fn(), // Deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});
