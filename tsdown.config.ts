import { defineConfig } from "tsdown/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import scss from "rollup-plugin-scss"

export default defineConfig({
	entry: "lib/index.ts",
	platform: "browser",
	dts: true,
	format: ["esm", "cjs"],
	plugins: [tailwindcss() as any, react(), scss()],
});
