import React from 'react';
import style from "./NavBar.module.css";
import StyledLink from "../../StyledLink/StyledLink";

const NavBar = () => {
    return (
        <div className={style.LinksBlock}>
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