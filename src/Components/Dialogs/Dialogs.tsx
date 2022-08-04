import React from 'react';
import style from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import MessagesItem from "./MessagesItem/MessagesItem";
import {DialogsDataType, MessageDataType} from "../../index";

type DialogsPropsType = {
    DialogsData: Array<DialogsDataType>
    MessageData: Array<MessageDataType>
}
const Dialogs = (props: DialogsPropsType) => {
    const Dialogs = props.DialogsData.map(dialog => <DialogsItem name={dialog.name} id={dialog.id}/>)
    const Messages = props.MessageData.map(message => <MessagesItem message={message.message}/> )

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