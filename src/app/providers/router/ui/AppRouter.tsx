import { Suspense } from "react";
import { Route, Routes } from "react-router";
import { RouterConfig } from "@/shared/config/RouteConfig/RouteConfig.tsx";

export const AppRouter = () => {
    return (
        <div className='content-wrapper'>
            <Suspense fallback={<div>Loading...</div>}>
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