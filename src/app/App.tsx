import { Link } from 'react-router';
import './styles/index.scss';
import { useTheme } from "@/entities/theme";
import { classNames } from "@/shared/lib/classNames/classnames";
import { AppRouter } from "@/app/providers/router";

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <AppRouter/>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
        </div>
    );
};

export default App;
