import React from 'react';
import style from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import {NavBarDataType} from "../../Redux/Types";
import {v1} from "uuid";

type NavBarPropsType = {
    state: NavBarDataType
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

            <div className={style.item}>
                <NavLink to="/profile" activeClassName={style.active}>Profile</NavLink>
            </div>

            <div className={style.item}>
                <NavLink to="/dialogs" activeClassName={style.active}>Messages</NavLink>
            </div>

            <div className={style.item}>
                <NavLink to="/news" activeClassName={style.active}>News</NavLink>
            </div>

            <div className={style.item}>
                <NavLink to="/music" activeClassName={style.active}>Music</NavLink>
            </div>

            <div className={style.item}>
                <NavLink to="/settings" activeClassName={style.active}>Settings</NavLink>
            </div>

            <div className={style.item}>
                <NavLink to="/users" activeClassName={style.active}>Users</NavLink>
            </div>

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