import type { RouteProps } from "react-router";
import { MainPage } from "@/pages/MainPage";
import { AboutPage } from "@/pages/AboutPage";
import { NotFoundPage } from "@/pages/NotFoundPage";

export const AppRoutes = {
    MAIN: "main",
    ABOUT: "about",
    NOTFOUND: "not-found",
} as const
export type AppRouteT = (typeof AppRoutes)[keyof typeof AppRoutes]

export const RouterPath: Record<AppRouteT, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOTFOUND]: '/*',
}

export const RouterConfig: Record<AppRouteT, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RouterPath[AppRoutes.MAIN],
        element: <MainPage/>
    },
    [AppRoutes.ABOUT]: {
        path: RouterPath[AppRoutes.ABOUT],
        element: <AboutPage/>
    },
    [AppRoutes.NOTFOUND]: {
        path: RouterPath[AppRoutes.NOTFOUND],
        element: <NotFoundPage/>
    }
}
