import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import svgr from "vite-plugin-svgr";

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), svgr(
    //     {
        //     svgrOptions: {
        //         // Автоматически заменяет fill и stroke на currentColor
        //         replaceAttrValues: {
        //             '#000': 'currentColor',
        //             '#000000': 'currentColor',
        //             'black': 'currentColor',
        //         },
        //     },
        // }
    ),],
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
    }
})
