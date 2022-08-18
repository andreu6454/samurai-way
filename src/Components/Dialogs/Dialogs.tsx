import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import style from './Dialogs.module.css'
import DialogsItem from "./DialogsItem/DialogsItem";
import MessagesItem from "./MessagesItem/MessagesItem";
import {MessageDataType, MessagesPageDataType} from "../../Redux/State";

type DialogsPropsType = {
    state: MessagesPageDataType
}

const Dialogs = (props: DialogsPropsType) => {
    let count = 4;
    const [messageData, setMessageData] = useState<Array<MessageDataType>>(props.state.MessageData)
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
        const newMessage: MessageDataType = {
            id: count,
            userId: 2,
            userAvatar: "https://android-obzor.com/wp-content/uploads/2022/02/9-1.jpg",
            message: message.trim()
        }
        count++;
        message.trim() !== "" && setMessageData([...messageData, newMessage])
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
                {Messages}
                <div className={style.InputZone}>
                    <textarea onChange={onChangeHandler} value={message} placeholder={"Your Message"}
                              onKeyPress={onKeyDownHandler}></textarea>
                    <button onClick={onClickAddMessage}> sent</button>
                </div>
            </div>

        </div>
    );
};

export default Dialogs;