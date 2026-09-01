import { classNames } from "@/shared/lib/classNames/classnames.ts";
import cls from "./LoaderWidget.module.scss"
import { Loader } from "@/shared/Loader";

interface LoaderWidgetProps {
    className?: string
}

export const LoaderWidget = ({ className }: LoaderWidgetProps) => {
    return (
        <div className={classNames(cls.LoaderWidget, {}, [className])}>
            <Loader/>
        </div>
    )
}