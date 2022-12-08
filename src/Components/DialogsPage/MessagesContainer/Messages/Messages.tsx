import React from 'react';
import style from "../../Dialogs.module.css";
import MessagesItem from "./MessagesItem/MessagesItem";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../../Redux/ReduxState";
import {MessageDataType} from "../../../../Redux/Types";

const Messages = () => {
    const messageData = useSelector<AppRootStateType,Array<MessageDataType>>(state => state.MessagesPage.MessageData)

    const Messages = messageData.map(message =>
        (<MessagesItem
            message={message.message}
            id={message.id}
            userId={message.userId}
            userAvatar={message.userAvatar}
        />)
    )
    return (
        <div className={style.messagesZone}>
            {Messages}
        </div>
    );
};

export default Messages;