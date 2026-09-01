import { classNames } from "@/shared/lib/classNames/classnames.ts";
import cls from "./Loader.module.scss"

interface LoaderProps {
    className?: string
}

export const Loader = ({className}: LoaderProps) => {
    return (
        <div className={classNames(cls.ldsRipple, {}, [className])}>
            <div></div>
            <div></div>
        </div>
    )
}