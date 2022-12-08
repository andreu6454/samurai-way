import React from 'react';
import style from './Dialogs.module.css'
import DialogsContainer from "./DialogsContainer/DialogsContainer";
import MessagesContainer from "./MessagesContainer/MessagesContainer";

const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <DialogsContainer/>
            <MessagesContainer/>
        </div>
    );
};

export default Dialogs;