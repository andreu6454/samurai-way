import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import style from "../Dialogs.module.css";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../../Redux/ReduxState";
import {addMessageAC} from "../../../Redux/Reducers/messagePageReducer";
import Messages from "./Messages/Messages";

const MessagesContainer = () => {
    const messageDataLength = useAppSelector<number>(state => state.MessagesPage.MessageData.length)
    const dispatch = useDispatch()
    const [message, setMessage] = useState<string>("")
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.currentTarget.value)
    }
    const onClickAddMessage = () => {
        message.trim() !== "" && dispatch(addMessageAC(messageDataLength + 1,message.trim()))
        setMessage("")
    }
    const onKeyDownHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        e.key === "Enter" && onClickAddMessage()
    }
    return (
        <div className={style.messages}>
            <Messages/>
            <div className={style.InputZone}>
                    <textarea onChange={onChangeHandler} value={message} placeholder={"Your Message"}
                              onKeyPress={onKeyDownHandler}></textarea>
                <button onClick={onClickAddMessage}> Send </button>
            </div>
        </div>
    );
};

export default MessagesContainer;