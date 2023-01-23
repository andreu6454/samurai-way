import React from 'react';
import style from "./Header.module.css";
import {Button} from "@mui/material";
import {useDispatch} from "react-redux";
import {logOutTC} from "../../Redux/Reducers/authReducer";
import {useAppSelector} from "../../Redux/ReduxState";

const Header = () => {
    const dispatch = useDispatch()
    const isAuth = useAppSelector(state => state.auth.isAuth)

    const logOutHandle = () => {
        dispatch(logOutTC())
    }

    return (
        <header className={style.appHeader}>

            <img
                src="https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn"
                alt={"logo"}/>

            {isAuth &&
                < Button
                sx={{mr: 2, borderRadius: "15px", bgcolor: "#0d1117"}}
                variant="contained"
                onClick={logOutHandle}
                >
                Log out
                </Button>
            }
        </header>
    );
};

export default Header;