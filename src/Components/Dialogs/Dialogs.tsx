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
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <DialogsItem name={DialogsData[0].name} id={DialogsData[0].id}/>
                <DialogsItem name={DialogsData[1].name} id={DialogsData[1].id}/>
                <DialogsItem name={DialogsData[2].name} id={DialogsData[2].id}/>
                <DialogsItem name={DialogsData[3].name} id={DialogsData[3].id}/>
                <DialogsItem name={DialogsData[4].name} id={DialogsData[4].id}/>
                <DialogsItem name={DialogsData[5].name} id={DialogsData[5].id}/>
            </div>
            <div className={style.messages}>
                <MessagesItem message={MessageData[0].message}/>
                <MessagesItem message={MessageData[1].message}/>
                <MessagesItem message={MessageData[2].message}/>
            </div>
        </div>
    );
};

export default Dialogs;