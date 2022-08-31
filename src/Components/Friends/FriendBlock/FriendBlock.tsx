import React from 'react';
import {FriendsType} from "../../../Redux/Types";
import style from "./FriendBlock.module.css"
import {NavLink} from "react-router-dom";

type FriendBlockPropsType = {
    state: FriendsType
}
const FriendBlock = (props: FriendBlockPropsType) => {
    return (
        <div className={style.FriendBlock}>
            <div className={style.avatar}>
                <img src={props.state.avatar} alt={"avatar"}></img>
            </div>
            <div className={style.content}>
                <div className={style.NameSurname}>
                    {props.state.friend} {props.state.surname}
                </div>
                <div className={style.links}>
                    <NavLink to={"dialogs/" + props.state.id}> Написать Сообщение </NavLink>
                    |
                    <NavLink to={"google.com"}> Позвонить </NavLink>
                </div>
            </div>
        </div>
    );
};

export default FriendBlock;