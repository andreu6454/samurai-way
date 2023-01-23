import {LinearProgress} from '@mui/material';
import {Outlet} from 'react-router-dom';
import {useAppSelector} from "../../Redux/ReduxState";
import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";

export const Layout = () => {
    const isInitialized = useAppSelector((state) => state.app.isInitialized);
    const isAuth = useAppSelector(state => state.auth.isAuth)

    if (!isInitialized) {
        return (
            <>
                <Header />
                {isAuth && <NavBar />}
                <LinearProgress />
            </>
        );
    }

    return (
        <>
            <Header />
            {isAuth && <NavBar />}
            <Outlet />
        </>
    );
};