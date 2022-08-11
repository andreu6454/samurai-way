import React from 'react';
import style from "./Requests.module.css"
import {FriendsRequestType} from "../../../../Redux/State";
import {NavLink} from "react-router-dom";

type RequestPropsType = {
    state: FriendsRequestType
}
const Request = (props: RequestPropsType) => {
    return (
        <div className={style.request}>
            <div className={style.avatar}>
                <img src={props.state.avatar} alt={"avatar"}></img>
            </div>
            <div>
                <div className={style.NameSurname}>
                    <NavLink to={"friends"}>{props.state.name} {props.state.surname}</NavLink>
                </div>
                <div className={style.friendsCounter}>
                    <NavLink to={"friends"}>{props.state.mutualFriends} общих друга</NavLink>
                </div>
                <div className={style.AddFriendKey}>
                    <NavLink to={"friends"}>+добавить в друзья</NavLink>
                </div>
            </div>


        </div>
    );
};

export default Request;