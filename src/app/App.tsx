import './styles/index.scss';
import { useTheme } from "@/entities/theme";
import { classNames } from "@/shared/lib/classNames/classnames";
import { AppRouter } from "@/app/providers/router";
import { NavBar } from "@/widgets/NavBar";
import { SideBar } from "@/widgets/SideBar";
import { Suspense } from "react";

const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            {/*i18n suspense*/}
            <Suspense fallback={'loading...'}>
                <NavBar/>
                <div className='content-page'>
                    <SideBar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    );
};

export default App;
