import React from 'react';
import style from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import {NavBarDataType} from "../../Redux/State";

type NavBarPropsType = {
    state: NavBarDataType
}
const Navbar = (props: NavBarPropsType) => {
    const friends = props.state.NavBarData.map(friend =>
        <div>
            <img src={friend.avatar} className={style.friendsImg} id={friend.id} alt={"avatar"}/>
        </div>
    )
    const friends2 = props.state.NavBarData.map(friend =>
        <div>
            <img src={friend.avatar} className={style.friendsImg} id={friend.id} alt={"avatar"}/>
            <div> {friend.friend}</div>
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

            <div className={style.friendsBlock}>
                <div className={style.item}>
                <NavLink to="/friends" activeClassName={style.active}>Friends</NavLink>
                </div>

                <div className={style.friends}>
                    {friends}
                </div>

                {/*<div>*/}
                {/*    {friends2}*/}
                {/*</div>*/}
            </div>

        </nav>
    );
};

export default Navbar;