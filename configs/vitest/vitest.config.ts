import { type TestUserConfig } from "vitest/node";

export function buildVitestConfig(): TestUserConfig {
    return {
        environment: 'jsdom',
        globals: true,
        setupFiles: "./configs/vitest/vitest.setup.ts"
    }
}