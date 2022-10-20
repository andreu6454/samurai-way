import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import style from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import MessagesItem from "./MessagesItem/MessagesItem";
import {DialogsDataType, MessageDataType} from "../../Redux/Types";
import {addMessageAC} from "../../Reducers/messagePageReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../Redux/ReduxState";

const Dialogs = () => {
    let count = 4;
    const messageData = useSelector<AppRootStateType,Array<MessageDataType>>(state => state.MessagesPage.MessageData)
    const dialogsData = useSelector<AppRootStateType,Array<DialogsDataType>>(state => state.MessagesPage.DialogsData)
    const dispatch = useDispatch()
    const [message, setMessage] = useState<string>("")

    const Dialogs = dialogsData.map(dialog =>
        (<DialogsItem
            name={dialog.name}
            id={dialog.id}
            avatar={dialog.avatar}
        />)
    )
    const Messages = messageData.map(message =>
        (<MessagesItem
            message={message.message}
            id={message.id}
            userId={message.userId}
            userAvatar={message.userAvatar}
        />)
    )

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.currentTarget.value)
    }
    const onClickAddMessage = () => {
        const id = count;
        count++;
        message.trim() !== "" && dispatch(addMessageAC(id,message.trim()))
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