import React, {useEffect} from 'react';
import style from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import {NavBarDataType} from "../../Redux/Types";
import {v1} from "uuid";
import StyledLink from "../../Items/StyledLink/StyledLink";
import {authApi} from "../../Api/auth-api";
import {useDispatch, useSelector} from "react-redux";
import {setUserDataAC} from "../../Redux/Reducers/authReducer";
import {AppRootStateType} from "../../Redux/ReduxState";

type NavBarPropsType = {
    state: NavBarDataType
}

const Navbar = (props: NavBarPropsType) => {
    const dispatch = useDispatch()

    let userId = useSelector<AppRootStateType>(state => state.auth.userId)

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

    useEffect(() => {
        authApi.isLogined().then((res) => {
            dispatch(setUserDataAC(res.data.data))
        })
    }, [])


    return (
        <nav className={style.appNav}>

            <StyledLink redirectTo={"/profile/" + userId} title={"Profile"}/>

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