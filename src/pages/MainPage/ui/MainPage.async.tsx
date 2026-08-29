import {lazy} from "react";

export const MainPageAsync = lazy(
    () => new Promise<{ default: typeof import('./MainPage').default }>(resolve => {
    // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
    setTimeout(() => resolve(import('./MainPage')), 1500)
}));