import {createContext} from "react";

export const Theme = {
    LIGHT: 'light',
    DARK: 'dark',
} as const
export type ThemeT = (typeof Theme)[keyof typeof Theme];

export interface ThemeContextProps {
    theme?: ThemeT;
    setTheme?: (theme: ThemeT) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme';
