#!/usr/bin/env node

const path = require("path")
const rails = require("esbuild-rails")

require("esbuild").build({
    entryPoints: ["application.jsx"],
    bundle: true,
    outdir: path.join(process.cwd(), "app/assets/builds"),
    absWorkingDir: path.join(process.cwd(), "app/javascript"),
    watch: process.argv.includes("--watch"),
    plugins: [rails()],
    loader: {
        ".js": "jsx",
        ".jsx": "jsx",
        ".ts": "tsx",
        ".tsx": "tsx",
    },
    format: "esm",
    splitting: true,
}).catch(() => process.exit(1))