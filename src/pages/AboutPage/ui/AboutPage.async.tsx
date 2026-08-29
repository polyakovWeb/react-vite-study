import {lazy} from "react";

export const AboutPageAsync = lazy(() => new Promise<{ default: typeof import('./AboutPage').default }>(resolve => {
    // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
    setTimeout(() => resolve(import('./AboutPage')), 1500)
}));