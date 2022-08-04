import React from 'react';
import style from "./DialogsItem.module.css"
import {NavLink} from "react-router-dom";

type DialogsPropsType = {
    name: string;
    id: number;
}

const DialogsItem = (props: DialogsPropsType) => {

    let path = "/dialogs/" + props.id

    return (
        <div className={style.dialog}>
            <NavLink to={path} activeClassName={style.active}> {props.name} </NavLink>
        </div>
    );
};

export default DialogsItem;