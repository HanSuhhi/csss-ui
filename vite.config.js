/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";
import Delete from "rollup-plugin-delete";
import dts from "vite-plugin-dts";
export default defineConfig({
    plugins: [vue(), vueJsx(), dts({})],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src")
        }
    },
    server: {
        port: 20218
    },
    test: {
        globals: true,
        environment: "jsdom",
        transformMode: {
            web: [/.[tj]sx$/]
        }
    },
    build: {
        lib: {
            entry: path.resolve(__dirname, "src/index.ts"),
            name: "csss-ui",
            fileName: function (format) { return "csss-ui.".concat(format, ".js"); }
        },
        rollupOptions: {
            external: ["vue"],
            output: {
                globals: {
                    vue: "Vue"
                }
            },
            plugins: [
                Delete({
                    targets: ["dist/types/client/App.vue.d.ts"],
                    hook: "generateBundle"
                }),
            ]
        }
    }
});