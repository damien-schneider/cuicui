import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: "./__mocks__/setup-tests.ts",
    alias: {
      // "@/": "./src/",
      "#/": new URL("./", import.meta.url).pathname,
      "@/": new URL("./", import.meta.url).pathname,
    },
  },
});
