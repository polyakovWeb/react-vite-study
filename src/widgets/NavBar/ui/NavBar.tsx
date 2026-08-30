import { classNames } from "@/shared/lib/classNames/classnames.ts";
import cls from "./NavBar.module.scss"
import { AppLink, AppLinkTheme } from "@/shared/AppLink"
import { useTranslation } from "react-i18next";

interface NavBarProps {
    className?: string
}

export const NavBar = ({className}: NavBarProps) => {
    const {t} = useTranslation('navbar')

    return (
        <nav className={classNames(cls.navbar, {}, [className])}>
            <div className="logo"></div>
            <div className={classNames(cls.links, {}, [])}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>{t('Главная')}</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>{t('О сайте')}</AppLink>
            </div>
        </nav>
    )
}