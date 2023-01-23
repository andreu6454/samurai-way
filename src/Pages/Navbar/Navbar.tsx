import React from 'react';
import style from "./Navbar.module.css";
import StyledLink from "../../Components/StyledLink/StyledLink";
import {logOutTC} from "../../Redux/Reducers/authReducer";
import {useDispatch} from "react-redux";
import {Button} from "@mui/material";
import {useAppSelector} from "../../Redux/ReduxState";


const Navbar = () => {
    const dispatch = useDispatch()
    const isAuth = useAppSelector(state => state.auth.isAuth)
    const logOutHandle = () => {
        dispatch(logOutTC())
    }

    return (
        <nav className={style.appNav}>
            <div className={style.links}>
                <StyledLink redirectTo={"/profile"} title={"Profile"}/>

                <StyledLink redirectTo={"/dialogs"} title={"Messages"}/>

                <StyledLink redirectTo={"/news"} title={"News"}/>

                <StyledLink redirectTo={"/music"} title={"Music"}/>

                <StyledLink redirectTo={"/users"} title={"Users"}/>

                <StyledLink redirectTo={"/settings"} title={"Settings"}/>

                <StyledLink redirectTo="/friends" title={"Friends"} />
            </div>


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

export default Navbar;