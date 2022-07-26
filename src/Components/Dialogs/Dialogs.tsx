import React from 'react';
import style from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import MessagesItem from "./MessagesItem/MessagesItem";


const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <DialogsItem name={"Andrey"} id={1}/>
                <DialogsItem name={"Celvin"} id={2}/>
                <DialogsItem name={"Kolyan"} id={3}/>
                <DialogsItem name={"Andrey"} id={4}/>
                <DialogsItem name={"Celvin"} id={5}/>
                <DialogsItem name={"Kolyan"} id={6}/>
            </div>
            <div className={style.messages}>
                <MessagesItem message={"hello"}/>
                <MessagesItem message={"How are you?"}/>
                <MessagesItem message={"Yooo"}/>
            </div>
        </div>
    );
};

export default Dialogs;