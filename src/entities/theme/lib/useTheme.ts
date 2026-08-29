import { LOCAL_STORAGE_THEME_KEY, type ThemeT, Theme, ThemeContext } from "../model/ThemeContext.ts";
import { useContext } from "react";

interface UseThemeResult {
    toggleTheme: () => void;
    theme: ThemeT;
}

export function useTheme(): UseThemeResult {
    const context = useContext(ThemeContext);

    if (!context || !context.theme || !context.setTheme) {
        throw new Error('useThene must be used within ThemeProvider');
    }

    const {theme, setTheme} = context;

    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return {
        theme,
        toggleTheme
    }
}