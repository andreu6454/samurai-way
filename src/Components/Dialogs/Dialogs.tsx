import React from 'react';
import style from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import MessagesItem from "./MessagesItem/MessagesItem";
import {MessagesPageDataType} from "../../Redux/State";

type DialogsPropsType = {
    state: MessagesPageDataType
}

const Dialogs = (props: DialogsPropsType) => {

    const Dialogs = props.state.DialogsData.map(dialog =>
        <DialogsItem
            name={dialog.name}
            id={dialog.id}
            avatar={dialog.avatar}
        />)
    const Messages = props.state.MessageData.map(message =>
        <MessagesItem
            message={message.message}
            id={message.id}
            userId={message.userId}
            userAvatar={message.userAvatar}
        /> )

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {Dialogs}
            </div>
            <div className={style.messages}>
                {Messages}
            </div>
        </div>
    );
};

export default Dialogs;