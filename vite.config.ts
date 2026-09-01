import { defineConfig } from 'vitest/config'

import path from 'path';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";

import { buildVitestConfig } from "./configs/vitest/vitest.config.ts";
import { buildVisualizerPlugin } from "./configs/rollup/visualizer.config.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
    test: buildVitestConfig(),
    plugins: [
        react(),
        svgr(),
        buildVisualizerPlugin()
    ],
    resolve: {
        alias: {
            // Алиасы сформированы заранее по FSD
            '@': path.resolve(__dirname, './src/'),
            // overhead
            // '@app': path.resolve(__dirname, './src/app/'),
            // '@pages': path.resolve(__dirname, './src/pages/'),
            // '@widgets': path.resolve(__dirname, './src/widgets/'),
            // '@features': path.resolve(__dirname, './src/features/'),
            // '@entities': path.resolve(__dirname, './src/entities/'),
            // '@shared': path.resolve(__dirname, './src/shared/'),
        },
        extensions: ['.tsx', '.ts', '.jsx', '.js', '.json']
    },
})
