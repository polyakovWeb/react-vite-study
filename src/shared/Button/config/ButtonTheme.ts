export const ButtonTheme = {
    CLEAR: 'clear'
} as const;

export type ButtonThemeT = typeof ButtonTheme[keyof typeof ButtonTheme];