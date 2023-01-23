import React from 'react';
import style from "./Header.module.css";
import {logOutTC} from "../../../Redux/Reducers/authReducer";
import {useDispatch} from "react-redux";
import {Button} from "@mui/material";
import {useAppSelector} from "../../../Redux/ReduxState";


const Header = () => {
    const dispatch = useDispatch()
    const isAuth = useAppSelector(state => state.auth.isAuth)
    const logOutHandle = () => {
        dispatch(logOutTC())
    }

    return (
        <nav className={style.appNav}>

            {isAuth &&
                < Button
                    sx={{mr: 2,mt: 0,mb: 0, borderRadius: "15px", bgcolor: "#0d1117"}}
                    variant="contained"
                    onClick={logOutHandle}
                >
                    Log out
                </Button>
            }
        </nav>
    );
};

export default Header;