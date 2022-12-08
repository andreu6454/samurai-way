import React from 'react';
import style from "../Dialogs.module.css";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../Redux/ReduxState";
import {DialogsDataType} from "../../../Redux/Types";
import DialogsItem from "./DialogsItem/DialogsItem";

const DialogsContainer = () => {
    const dialogsData = useSelector<AppRootStateType,Array<DialogsDataType>>(state => state.MessagesPage.DialogsData)

    const Dialogs = dialogsData.map(dialog =>
        (<DialogsItem
            name={dialog.name}
            id={dialog.id}
            avatar={dialog.avatar}
        />)
    )

    return (
        <div className={style.dialogsItems}>
            {Dialogs}
        </div>
    );
};

export default DialogsContainer;