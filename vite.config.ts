import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react";

export default defineConfig({
  build: {
    lib: {
      entry: "./lib/index.ts",
      name: "frey-ui",
      formats: ["es", "cjs"],

      fileName: (format) => {
        const extMap: Record<typeof format, string> = {
          es: "mjs",
          cjs: "cjs",
          esm: "mjs",
          amd: "js",
          iife: "js",
          umd: "js",
          system: "js",
          commonjs: "cjs",
          module: "mjs",
          systemjs: "js",
        } as const;

        const ext = extMap[format] as string;

        return `frey-ui.${ext}`;
      },
    },
  },
  plugins: [
    dts({
      include: ["lib"],
      rollupTypes: true,
      insertTypesEntry: true,
    }),
    react(),
  ],
});
