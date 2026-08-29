import { Suspense } from "react";
import { Route, Routes } from "react-router";
import { AboutPage } from "@/pages/AboutPage";
import { MainPage } from "@/pages/MainPage";
import { RouterConfig } from "@/shared/config/RouteConfig/RouteConfig.tsx";

export const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.values(RouterConfig)
                    .map((routeProps) => (
                        <Route {...routeProps} />
                    ))}
                <Route path={'/about'} element={<AboutPage/>}/>
                <Route path={'/'} element={<MainPage/>}/>
            </Routes>
        </Suspense>)
}