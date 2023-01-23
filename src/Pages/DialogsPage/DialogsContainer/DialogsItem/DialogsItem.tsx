import React from 'react';
import style from "./DialogsItem.module.css"
import {NavLink} from "react-router-dom";

type DialogsPropsType = {
    name: string;
    id: number;
    avatar: string
}

const DialogsItem = (props: DialogsPropsType) => {

    let path = "/dialogs/" + props.id

    return (
        <div>
            <hr></hr>
            <div className={style.dialog}>
                <img className={style.avatar} src={props.avatar} alt={"avatar"}></img>
                <NavLink to={path} > {props.name} </NavLink>
            </div>
            <hr></hr>
        </div>
    );
};

export default DialogsItem;