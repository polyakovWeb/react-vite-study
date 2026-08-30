import { classNames } from "@/shared/lib/classNames/classnames.ts";
import cls from "./ThemeSwitcher.module.scss"
import { Theme, useTheme } from "@/entities/theme";
import LightThemeIcon from "@/shared/assets/light-mode-svgrepo-com.svg?react"
import DarkThemeIcon from "@/shared/assets/moon-dark-theme-svgrepo-com.svg?react"
import { Button, ButtonTheme } from "@/shared/Button"

interface ThemeSwitcherProps {
    className?: string
}

const WIDTH = 40, HEIGHT = 30;

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme();

    return (
        <Button theme={ButtonTheme.CLEAR} onClick={toggleTheme}
                className={classNames('', {}, [className])}>
            {
                theme === Theme.DARK
                    ? <DarkThemeIcon className={classNames(cls.themeIcon)} width={WIDTH} height={HEIGHT}/>
                    : <LightThemeIcon className={classNames(cls.themeIcon)} width={WIDTH} height={HEIGHT}/>
            }
        </Button>
    )
}