import React, {ChangeEvent, KeyboardEvent, useReducer, useState} from 'react';
import style from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import MessagesItem from "./MessagesItem/MessagesItem";
import {MessagesPageDataType} from "../../Redux/Types";
import {addMessageAC, messagesReducer} from "../../Reducers/messagePageReducer";

type DialogsPropsType = {
    state: MessagesPageDataType
}

const Dialogs = (props: DialogsPropsType) => {
    let count = 4;
    const [messageData, dispatchMessageData] = useReducer(messagesReducer,props.state.MessageData)
    const [message, setMessage] = useState<string>("")

    const Dialogs = props.state.DialogsData.map(dialog =>
        <DialogsItem
            name={dialog.name}
            id={dialog.id}
            avatar={dialog.avatar}
        />)
    const Messages = messageData.map(message =>
        <MessagesItem
            message={message.message}
            id={message.id}
            userId={message.userId}
            userAvatar={message.userAvatar}
        />
    )

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.currentTarget.value)
    }
    const onClickAddMessage = () => {
        const id = count;
        count++;
        message.trim() !== "" && dispatchMessageData(addMessageAC(id,message.trim()))
        setMessage("")
    }
    const onKeyDownHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        e.key === "Enter" && onClickAddMessage()
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {Dialogs}
            </div>
            <div className={style.messages}>
                <div className={style.messagesZone}>
                    {Messages}
                </div>

                <div className={style.InputZone}>
                    <textarea onChange={onChangeHandler} value={message} placeholder={"Your Message"}
                              onKeyPress={onKeyDownHandler}></textarea>
                    <button onClick={onClickAddMessage}> Send </button>
                </div>
            </div>

        </div>
    );
};

export default Dialogs;