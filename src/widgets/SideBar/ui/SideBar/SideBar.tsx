import { classNames } from "@/shared/lib/classNames/classnames.ts";
import cls from "./SideBar.module.scss"
import { useState } from "react";
import { ThemeSwitcher } from "@/widgets/ThemeSwitcher";
import { LanguageSwitcher } from "@/widgets/LanguageSwitcher";
import { useTranslation } from "react-i18next";

interface SideBarProps {
    className?: string
}

export const LOCAL_STORAGE_SIDEBAR_KEY = 'isCollapsedSidebar';

export const SideBar = ({className}: SideBarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(localStorage.getItem(LOCAL_STORAGE_SIDEBAR_KEY) === "true");
    const {t} = useTranslation('sidebar');

    function toggleCollapsed() {
        setCollapsed(prev => {
            const newState = !prev
            localStorage.setItem(LOCAL_STORAGE_SIDEBAR_KEY, newState.toString())
            return newState
        })
    }

    return (
        <div data-testid="sidebar" className={classNames(cls.SideBar, {[cls.collapsed]: collapsed}, [className])}>
            <button data-testid="toggle-sidebar" onClick={toggleCollapsed}>{t(collapsed ? 'Открыть сайдбар' : 'Закрыть сайдбар')}</button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LanguageSwitcher/>
            </div>
        </div>
    )
}