import { Suspense } from "react";
import { Route, Routes } from "react-router";
import { RouterConfig } from "@/shared/config/RouteConfig/RouteConfig.tsx";
import { LoaderWidget } from "@/widgets/LoaderWidget";

export const AppRouter = () => {

    return (
        <div className='content-wrapper'>
            <Suspense fallback={<LoaderWidget/>}>
                <Routes>
                    {Object.values(RouterConfig)
                        .map((routeProps) => (
                            <Route key={routeProps.path} {...routeProps}/>
                        ))}
                </Routes>
            </Suspense>
        </div>
    )
}