export const ButtonTheme = {
    CLEAR: 'clear',
    OUTLINE: 'outline'
} as const;

export type ButtonThemeT = typeof ButtonTheme[keyof typeof ButtonTheme];