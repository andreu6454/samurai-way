import {LinearProgress} from '@mui/material';
import {Outlet} from 'react-router-dom';
import {useAppSelector} from "../../Redux/ReduxState";
import Navbar from "../../Pages/Navbar/Navbar";

export const Layout = () => {
    const isInitialized = useAppSelector((state) => state.app.isInitialized);

    if (!isInitialized) {
        return (
            <>
                <Navbar />
                <LinearProgress />
            </>
        );
    }

    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
};