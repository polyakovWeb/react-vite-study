import { classNames } from "@/shared/lib/classNames/classnames.ts";
import cls from "./LanguageSwitcher.module.scss"
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "@/shared/Button";

interface LanguageSwitcherProps {
    className?: string
}

export const LanguageSwitcher = ({className}: LanguageSwitcherProps) => {
    const {t, i18n} = useTranslation('sidebar');

    function toggleLanguage() {
        const newLang = i18n.language === 'ru' ? 'en' : 'ru';
        i18n.changeLanguage(newLang);
    }

    return (
        <Button theme={ButtonTheme.CLEAR} onClick={toggleLanguage} className={classNames(cls.LanguageSwitcher, {}, [className])}>
            {t(['Язык'])}: {i18n.language}
        </Button>
    )
}