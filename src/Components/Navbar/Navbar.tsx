import React from 'react';
import style from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import {NavBarDataType} from "../../Redux/Types";
import {v1} from "uuid";
import StyledLink from "../../Items/StyledLink/StyledLink";

type NavBarPropsType = {
    state: NavBarDataType,
    userId: number
}

const Navbar = (props: NavBarPropsType) => {


    const friends = props.state.NavBarData.map(friend =>
        <div key={v1()}>
            <img
                src={friend.avatar}
                className={style.friendsImg}
                id={friend.id}
                alt={"avatar"}
            />
        </div>
    )




    return (
        <nav className={style.appNav}>

            <StyledLink redirectTo={"/profile/" + props.userId} title={"Profile"}/>

            <StyledLink redirectTo={"/dialogs"} title={"Messages"}/>

            <StyledLink redirectTo={"/news"} title={"News"}/>

            <StyledLink redirectTo={"/music"} title={"Music"}/>

            <StyledLink redirectTo={"/settings"} title={"Settings"}/>

            <StyledLink redirectTo={"/users"} title={"Users"}/>

            <div className={style.friendsBlock}>
                <div className={style.item}>
                    <NavLink to="/friends" activeClassName={style.active}>Friends</NavLink>
                </div>

                <div className={style.friends}>
                    {friends}
                </div>
            </div>

        </nav>
    );
};

export default Navbar;