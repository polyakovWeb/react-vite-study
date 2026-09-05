import { mergeConfig } from 'vite';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
import type { StorybookConfig } from '@storybook/react-vite';
import path from "path";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import svgr from "vite-plugin-svgr";

const __dirname = dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
    stories: [
        "../../src/**/*.mdx",
        "../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
    ],
    addons: [
        "@chromatic-com/storybook",
        "@storybook/addon-vitest",
        "@storybook/addon-a11y",
        "@storybook/addon-docs",
        "@storybook/addon-onboarding"
    ],
    framework: "@storybook/react-vite",
    viteFinal: (config) => mergeConfig(config, {
        test: {
            projects: [{
                extends: true,
                plugins: [
                    // The plugin will run tests for the stories defined in your Storybook config
                    // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
                    storybookTest({
                        configDir: "./configs/storybook"
                    })],
                test: {
                    name: 'storybook',
                    browser: {
                        enabled: true,
                        headless: true,
                        provider: playwright({}),
                        instances: [{
                            browser: 'chromium'
                        }]
                    }
                }
            }]
        },
        plugins: [svgr()],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, '../../src/')
            }
        }
    })
};
export default config;