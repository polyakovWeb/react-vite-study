import { Suspense } from "react";
import { Route, Routes } from "react-router";
import { RouterConfig } from "@/shared/config/RouteConfig/RouteConfig.tsx";
import { useTranslation } from "react-i18next";

export const AppRouter = () => {
    const {t} = useTranslation('common');

    return (
        <div className='content-wrapper'>
            <Suspense fallback={<div>{t('Загрузка')}...</div>}>
                <Routes>
                    {Object.values(RouterConfig)
                        .map((routeProps) => (
                            <Route key={routeProps.path} {...routeProps} />
                        ))}
                </Routes>
            </Suspense>
        </div>
    )
}