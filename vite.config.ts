/** @type {import('vite').UserConfig} */
/// <reference types="vitest/config" />

import path from "path";
import { defineConfig } from "vite";

//** PLUGINS **/ //
import vue from "@vitejs/plugin-vue";
import liveReload from "vite-plugin-live-reload";
import checker from "vite-plugin-checker";

export default defineConfig({
  plugins: [
    vue(),
    liveReload(["**/*.ctp", "**/*.php"]),
    checker({
      typescript: true,
      vueTsc: true,
      overlay: true,
      enableBuild: false,
    }),
  ],
  root: "./",
  publicDir: "public",
  appType: "mpa",
  build: {
    manifest: true,
    outDir: "webroot", // Output directory for built files
    emptyOutDir: false,
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
  server: {
    port: 3000,
  },
  test: {
    globals: true,
    environment: "jsdom",
    include: ["**/*.spec.ts"],
    setupFiles: ["./tests/unit/vitest-setup.ts"],
  },
});
