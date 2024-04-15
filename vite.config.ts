import { PluginOption, defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from 'tailwindcss';

export default defineConfig(() => {
    return {
        build: {
            outDir: "build",
        },
        plugins: [react(), 
            tailwindcss()] as PluginOption[],
    };
});
