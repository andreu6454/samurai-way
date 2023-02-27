import React from 'react';
import style from "./ProfileMenu.module.css"
import {useAppSelector} from "../../../../Redux/ReduxState";
import {ArrowDropDown} from "@mui/icons-material";
import {Popover} from "@mui/material";
import {NavLink} from "react-router-dom";
import {appRoutes} from "../../../../Routes/constants";
import {logOutTC} from "../../../../Redux/Reducers/authReducer";
import {useDispatch} from "react-redux";

const ProfileMenu = () => {
    const profilePhoto = useAppSelector(state => state.ProfilePage.userProfile.photos.small)
    const login = useAppSelector(state => state.auth.login)
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const dispatch = useDispatch()

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const logOutHandle = () => {
        dispatch(logOutTC())
        handleClose()
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div className={style.ProfileInfoBlock}>
            <img className={style.profilePhoto} src={profilePhoto} alt={"photo"} onClick={handleClick}/>
            <ArrowDropDown onClick={handleClick}/>
            <Popover
                sx={{borderRadius: '6px'}}
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <div className={style.popoverContent}>
                    {login && <div className={style.loginBlock}>
                        Signed in as
                        <div className={style.login}>
                            {login}
                        </div>
                    </div>}
                    <div className={style.linksBlock}>
                        <NavLink to={appRoutes.PROFILE} onClick={handleClose} className={style.navLink}> Your
                            profile</NavLink>
                        <NavLink to={appRoutes.USERS} onClick={handleClose} className={style.navLink}> Users</NavLink>
                    </div>
                    <div className={style.logOutBlock} onClick={logOutHandle}>
                        Log out
                    </div>
                </div>
            </Popover>
        </div>
    );
};

export default ProfileMenu;