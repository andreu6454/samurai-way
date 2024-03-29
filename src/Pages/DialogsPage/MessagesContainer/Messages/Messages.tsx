import React from 'react';
import style from "../../Dialogs.module.css";
import MessagesItem from "./MessagesItem/MessagesItem";
import {useAppSelector} from "../../../../Redux/ReduxState";
import {MessageDataType} from "../../../../Redux/Types";
import {v1} from "uuid";

const Messages = () => {
    const messageData = useAppSelector<Array<MessageDataType>>(state => state.MessagesPage.MessageData)

    const Messages = messageData.map(message =>
        (<MessagesItem
            key={v1()}
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