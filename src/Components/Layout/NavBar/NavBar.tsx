import React from 'react';
import style from "./NavBar.module.css";
import StyledLink from "../../StyledLink/StyledLink";
import {useAppSelector} from "../../../Redux/ReduxState";

const NavBar = () => {
    const isAvatarVisible = useAppSelector(state => state.app.isVisible)
    const avatar = useAppSelector(state => state.ProfilePage.userProfile.photos.small)
    const login =useAppSelector(state => state.auth.login)


    return (
        <div className={style.LinksBlock}>
            <div className={!isAvatarVisible? style.avatarAndLogin : style.avatarAndLoginHidden}>
                {avatar && <img className={style.avatarAndLoginImg} src={avatar} alt={'avatar'}/>}
                {login}
            </div>

            <div className={style.LinksContainer}>
                <StyledLink redirectTo={"/profile"} title={"Profile"}/>

                <StyledLink redirectTo={"/dialogs"} title={"Messages"}/>

                <StyledLink redirectTo={"/news"} title={"News"}/>

                <StyledLink redirectTo={"/music"} title={"Music"}/>

                <StyledLink redirectTo={"/users"} title={"Users"}/>

                <StyledLink redirectTo={"/settings"} title={"Settings"}/>

                <StyledLink redirectTo="/friends" title={"Friends"} />
            </div>
        </div>
    );
};

export default NavBar;