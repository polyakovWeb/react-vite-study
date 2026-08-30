export const AppLinkTheme = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
} as const

export type AppLinkThemeT = (typeof AppLinkTheme)[keyof typeof AppLinkTheme]