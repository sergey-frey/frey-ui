import { defineConfig } from "tsdown/config";
import react from "@vitejs/plugin-react";
import scss from "rollup-plugin-scss";

export default defineConfig({
	entry: "lib/index.ts",
	platform: "browser",
	format: ["esm", "cjs"],
	dts: true,
	minify: true,
	plugins: [
		react(),
		scss({
			fileName: "index.css",
			prefix: '@use "..//lib//styles//global.scss" as *;',
		}),
	] as any[],
});
