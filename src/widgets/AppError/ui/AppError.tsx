import { classNames } from "@/shared/lib/classNames/classnames.ts";
import cls from "./AppError.module.scss"
import { useTranslation } from "react-i18next";

export interface FallbackProps {
    error: Error;
    resetError: () => void;
}

export const AppError = ({error, resetError}: FallbackProps) => {
    const {t} = useTranslation('common')

    return (
        <div className={classNames(cls.AppError)}>
            <h1>{t('Произошла ошибка')}</h1>
            <p className={classNames(cls.message)}>{error.message} </p>
            <button
                onClick={resetError}
             className={classNames(cls.button)}>
                {t('Попробовать снова')}
            </button>
        </div>
    )
}