import type { RouteProps } from "react-router";
import { MainPage } from "@/pages/MainPage";
import { AboutPage } from "@/pages/AboutPage";

export const AppRoutes = {
    MAIN: "main",
    ABOUT: "about",
} as const
export type AppRouteT = (typeof AppRoutes)[keyof typeof AppRoutes]

export const RouterPath: Record<AppRouteT, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
}

export const RouterConfig: Record<AppRouteT, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RouterPath[AppRoutes.MAIN],
        element: <MainPage/>
    },
    [AppRoutes.ABOUT]: {
        path: RouterPath[AppRoutes.ABOUT],
        element: <AboutPage/>
    }
}
