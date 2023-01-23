import {LinearProgress} from '@mui/material';
import {Outlet} from 'react-router-dom';
import {useAppSelector} from "../../Redux/ReduxState";
import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";

export const Layout = () => {
    const isInitialized = useAppSelector((state) => state.app.isInitialized);

    if (!isInitialized) {
        return (
            <>
                <Header />
                <NavBar />
                <LinearProgress />
            </>
        );
    }

    return (
        <>
            <Header />
            <NavBar />
            <Outlet />
        </>
    );
};