import React from 'react';
import style from "./Requests.module.css"
import {FriendsRequestType} from "../../../../Redux/Types";
import {NavLink} from "react-router-dom";
import {appRoutes} from "../../../../Routes/constants";

type RequestPropsType = {
    state: FriendsRequestType
}
const Request = (props: RequestPropsType) => {
    return (
        <div className={style.request}>
            <img className={style.avatar} src={props.state.avatar} alt={"avatar"}></img>
            <div className={style.infoBlock}>
                <NavLink className={style.NameSurname} to={appRoutes.FRIENDS}>{props.state.name} {props.state.surname}</NavLink>
                <NavLink className={style.friendsCounter} to={appRoutes.FRIENDS}>{props.state.mutualFriends} общих</NavLink>
                <NavLink className={style.AddFriendKey} to={appRoutes.FRIENDS}>+добавить в друзья</NavLink>
            </div>
        </div>
    );
};

export default Request;