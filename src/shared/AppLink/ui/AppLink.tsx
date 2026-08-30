import { classNames } from "@/shared/lib/classNames/classnames.ts";
import { Link, type LinkProps } from "react-router"
import type { FC, ReactNode } from "react";
import cls from "./AppLink.module.scss"
import { AppLinkTheme, type AppLinkThemeT } from "../config/AppLinkTheme.ts";

interface AppLinkProps extends LinkProps {
    className?: string
    children?: ReactNode;
    theme?: AppLinkThemeT;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {className, children, theme = AppLinkTheme.SECONDARY, to, ...otherProps} = props;

    return (
        <Link to={to}
              className={classNames(cls.appLink, {}, [className, cls[theme]])}
              {...otherProps}
        >
            {children}
        </Link>
    )
}