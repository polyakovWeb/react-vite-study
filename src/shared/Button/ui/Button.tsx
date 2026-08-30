import { classNames } from "@/shared/lib/classNames/classnames.ts";
import cls from "./Button.module.scss"
import { type ButtonThemeT } from "../config/ButtonTheme"
import type { FC, HTMLAttributes, ReactNode } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    className?: string
    children?: ReactNode
    theme: ButtonThemeT
}

export const Button: FC<ButtonProps> = (props) => {
    const {className, children, theme, ...otherProps} = props

    return (
        <button className={classNames(cls.Button, {}, [className, cls[theme]])} {...otherProps}>
            {children}
        </button>
    )
}