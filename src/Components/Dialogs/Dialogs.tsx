import React from 'react';
import style from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import MessagesItem from "./MessagesItem/MessagesItem";


const Dialogs = () => {
    const DialogsData = [
        {id: 1, name: "Andrey"},
        {id: 2, name: "Celvin"},
        {id: 3, name: "Kolyan"},
        {id: 4, name: "Andrey"},
        {id: 5, name: "Celvin"},
        {id: 6, name: "Kolyan"},
    ]
    const MessageData = [
        {id: 1, message: "hello"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Yooo"},
    ]

    const Dialogs = DialogsData.map(dialog => <DialogsItem name={dialog.name} id={dialog.id}/>)
    const Messages = MessageData.map(message => <MessagesItem message={message.message}/> )

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