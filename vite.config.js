import { defineConfig, loadEnv } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";
import autoprefixer from "autoprefixer";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig((config) => {
    // Load env file based on `mode` in the current working directory.
    // https://main.vitejs.dev/config/#using-environment-variables-in-config
    const env = loadEnv(config.mode, process.cwd(), "");

    return {
        define: {
            __APP_ENV__: JSON.stringify(env.APP_ENV),
        },
        plugins: [
            laravel({
                input: [
                    // css
                    "resources/app/styles/scss/style.scss",
                ],
                refresh: true,
                // @ts-ignore
                postcss: [autoprefixer()],
            }),
            react(),
        ],
        server: {
            host: 'localhost',
            port: 8000,
        },
        commonjsOptions: {
            esmExternals: true,
        },
        css: {
            preprocessorOptions: {
                scss: {
                    // includePaths: ["resources/app/images"],
                },
            },
        },
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "resources/app"),
            },
        },
    };
});
